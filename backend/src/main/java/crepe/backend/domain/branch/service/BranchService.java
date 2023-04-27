package crepe.backend.domain.branch.service;

import crepe.backend.domain.branch.domain.entity.Branch;
import crepe.backend.domain.branch.domain.repository.BranchRepository;
import crepe.backend.domain.branch.dto.*;
import crepe.backend.domain.log.domain.entity.Layer;
import crepe.backend.domain.log.domain.entity.Log;
import crepe.backend.domain.log.domain.entity.Resource;
import crepe.backend.domain.log.domain.repository.LayerRepository;
import crepe.backend.domain.log.domain.repository.LogRepository;

import crepe.backend.domain.log.domain.repository.ResourceRepository;
import crepe.backend.domain.project.domain.entity.Project;
import crepe.backend.domain.project.exception.NotFoundResourceEntity;
import crepe.backend.domain.project.service.ProjectService;
import crepe.backend.domain.branch.exception.NotFoundBranchEntityException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class BranchService {

    private final BranchRepository branchRepository;
    private final ProjectService projectService;
    private final LogRepository logRepository;
    private final LayerRepository layerRepository;
    private final ResourceRepository resourceRepository;


    public BranchCreateInfo branchCreate(BranchCreate createRequest) { // 브랜치를 생성하는 모듈
        Project findProject = projectService.getProjectById(createRequest.getProjectId());
        Branch branchdata = changeBranchCreateToBranch(createRequest, findProject);
        Branch savedata = branchRepository.save(branchdata);

        return mapBranchEntityToBranchCreateInfo(savedata);
    }

    public BranchInfo findBranchInfoByUuId(UUID uuid) { // 특정 브랜치의 정보를 찾을 때 사용하는 모듈
        Branch findBranch = findBranchByUuid(uuid);
        return mapBranchEntityToBranchInfo(findBranch);
    }

    public BranchLogInfoList findLogInfoByUuid(UUID uuid) { // 해당 브랜치의 모든 로그 정보를 찾는 모듈
        Branch findBranch = findBranchByUuid(uuid);
        List<Log> logs = getLogList(findBranch);
        return getLogInfoList(logs);
    }

    private Branch changeBranchCreateToBranch(BranchCreate branchCreate, Project project) { // BranchCreate 타입을 Branch 타입으로 변환하는 모듈
        return Branch.builder()
                .project(project)
                .name(branchCreate.getName())
                .build();
    }

    private BranchCreateInfo mapBranchEntityToBranchCreateInfo(Branch savedata) { // Branch 타입을 BranchCreateInfo 타입으로 변환하는 모듈
        return BranchCreateInfo.builder()
                .uuid(savedata.getUuid())
                .build();
    }

    private BranchInfo mapBranchEntityToBranchInfo(Branch branch) // Branch 타입을 BranchInfo 타입으로 변환하는 모듈
    {
        return BranchInfo.builder()
                .name(branch.getName())
                .id(branch.getId())
                .build();
    }

    private BranchLogInfoList getLogInfoList(List<Log> logs) // LogInfo들을 LogInfoList로 변환하는 모듈
    {
        List<BranchLogInfo> logInfos = new ArrayList<>();

        for(int i = 0; i < logs.size(); i ++)
        {
            logInfos.add(BranchLogInfo.builder()
                    .uuid(logs.get(i).getUuid())
                    .message(logs.get(i).getMessage())
                    .build());
        }

        return new BranchLogInfoList(logInfos);
    }
    private Branch findBranchByUuid(UUID uuid) { // 쿼리를 이용해서 UUID를 가지고 브랜치를 찾는 모듈
        return branchRepository.findBranchByUuidAndIsActiveTrue(uuid).orElseThrow(NotFoundBranchEntityException::new);
    }

    public Branch findBranchById(Long id)
    {
        return branchRepository.findBranchByIdAndIsActiveTrue(id).orElseThrow(NotFoundBranchEntityException::new);
    }

    private List<Log> getLogList(Branch branch) { // 쿼리를 이용해서 BranchId로 해당 브랜치에 있는 로그들을 가져오는 모듈
        List<Log> logs = logRepository.findAllLogByBranchAndIsActiveTrue(branch);

        return logs;
    }

    public void updateBranchInfo(UUID uuid, Map<String, String> branch)
    {
        Branch oBranch = findBranchByUuid(uuid);

        oBranch.updateBranch(branch.get("name"));
        branchRepository.save(oBranch);
    }

    public void deleteBranch(UUID uuid) {
        Branch branch = findBranchByUuid(uuid);
        branchRepository.deleteById(branch.getId());
    }
    private Log getRecentLogByBranch(Branch branch) {
        return logRepository.findAllByBranchAndIsActiveTrueOrderByCreatedAtDesc(branch).get(0);
    }

    private Branch getBranchByUuid(UUID uuid) {
        return branchRepository.findBranchByUuidAndIsActiveTrue(uuid).orElseThrow(NotFoundBranchEntityException::new);
    }

    public BranchRecentLogInfo findRecentLogInfoByUuid(UUID uuid) {
        Branch branch = findBranchByUuid(uuid);
        Log log = getRecentLogByBranch(branch);
        return BranchRecentLogInfo.builder()
                .uuid(log.getUuid())
                .build();
    }

    //public MergeResourceInfoList getMergeResourceList(UUID uuid) {
    public void getMergeResourceList(UUID uuid) {

        Branch branch = getBranchByUuid(uuid);
        //메인브랜치는 삭제 될 일 없으니 0번 받아옴
        Branch mainBranch = branch.getProject().getBranches().get(0);


        // isActive 상태의 가장 최신 로그
        Log log = getRecentLogByBranch(branch);
        Log mainLog = getRecentLogByBranch(mainBranch);

        // 정렬된 모든 레이어 받아옴
        List<Layer> layers = layerRepository.findAllByLogAndIsActiveTrueOrderBySequence(log);
        List<Layer> mainLayers = layerRepository.findAllByLogAndIsActiveTrueOrderBySequence(mainLog);

        List<Resource> resources = getResourcesByLayer(layers);
        List<Resource> mainResources = getResourcesByLayer(mainLayers);

        getMergeResourceList(resources, mainResources);


    }

    //리소스 리스트 반환
    private List<Resource> getResourcesByLayer(List<Layer> layers) {
        List<Resource> resources = new ArrayList<>();
        for(Layer layer: layers) {
            if (layer.getResource().isActive() == true) {
                resources.add(layer.getResource());
            }
            //resources.add(getResourceById(layer.getResource().getId()));
        }
        return resources;
    }

    //리소스 아이디로 리소스 찾기
    private Resource getResourceById(Long id) {
        return resourceRepository.findResourceByIdAndIsActiveTrue(id).orElseThrow(NotFoundResourceEntity::new);
    }

    private List<Resource> getMergeResourceList(List<Resource> resources, List<Resource> mainResources) {
        List<MergeResourceInfo> mergeResourceInfos = new ArrayList<>();
        int sequence = 0;
        int index = 0;
        boolean isDone = false; //계산 됐는감
        // 두 리소스 모두 비면 종료

        for (Resource mainResource: mainResources) {
            for (Resource resource: resources) {
                //만약 메인리소스와 리소스에 같은 파일이 있다면
                if (mainResource.getName().equals(resource.getName())) {
                    mergeResourceInfos.add(mapMergeResourceInfo(resource.getName(),
                            resource.getLink(),
                            layerRepository.findByResourceAndIsActiveTrue(resource).getSequence(),
                            true,
                            true));
                    isDone = true;
                }
            }
            if(isDone == false) {
                mergeResourceInfos.add(mapMergeResourceInfo(mainResource.getName(),
                        mainResource.getLink(),
                        layerRepository.findByResourceAndIsActiveTrue(mainResource).getSequence(),
                        false,
                        false));
                isDone = true;
            }
        } //리소스에 있고 메인에 없는거 넣어주는 코드 작성해야함



    }

    private MergeResourceInfo mapMergeResourceInfo(String name,
                                                   String link,
                                                   int sequence,
                                                   boolean isDuplicated,
                                                   boolean isNew) {
        return MergeResourceInfo.builder()
                .name(name)
                .link(link)
                .sequence(sequence)
                .isDuplicated(isDuplicated)
                .isNew(isNew)
                .build();
    }

}