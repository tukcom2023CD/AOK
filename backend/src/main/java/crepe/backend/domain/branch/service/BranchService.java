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

import java.util.*;

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

    public List<MergeResourceInfo> getMergeResources(UUID uuid) {

        Branch branch = getBranchByUuid(uuid);
        //메인브랜치는 삭제 될 일 없으니 0번 받아옴
        Branch mainBranch = branch.getProject().getBranches().get(0);
        System.out.println("==============================");
        System.out.println("<branch>");
        System.out.println(branch.getName());
        System.out.println("------------------------------");
        System.out.println(mainBranch.getName());

        // isActive 상태의 가장 최신 로그
        Log log = getRecentLogByBranch(branch);
        Log mainLog = getRecentLogByBranch(mainBranch);
        System.out.println("==============================");
        System.out.println("<log>");
        System.out.println(log.getMessage());
        System.out.println("------------------------------");
        System.out.println(mainLog.getMessage());

        // 정렬된 모든 레이어 받아옴
        List<Layer> layers = layerRepository.findAllByLogAndIsActiveTrueOrderBySequence(log);
        List<Layer> mainLayers = layerRepository.findAllByLogAndIsActiveTrueOrderBySequence(mainLog);
        System.out.println("==============================");
        System.out.println("<layer>");
        for(Layer layer: layers){
            System.out.println(layer.getResource().getName());
        }
        System.out.println("------------------------------");
        for(Layer layer: mainLayers){
            System.out.println(layer.getResource().getName());
        }

        List<Resource> resources = getResourcesByLayer(layers);
        List<Resource> mainResources = getResourcesByLayer(mainLayers);
        System.out.println("==============================");
        System.out.println("<resource>");
        for(Resource resource: resources){
            System.out.println(resource.getName());
        }
        System.out.println("------------------------------");
        for(Resource resource: mainResources){
            System.out.println(resource.getName());
        }

        return getMergeResourceInfoList(resources, mainResources);
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

    private List<MergeResourceInfo> getMergeResourceInfoList(List<Resource> resources, List<Resource> mainResources) {
        List<MergeResourceInfo> mergeResourceInfos = new ArrayList<>();

        int index = 0;
        boolean isIn = false;

        List<List<String>> branchFileInfos = getFileInfoList(resources);
        List<List<String>> mainFileInfos = getFileInfoList(mainResources);

        System.out.println("==============================");
        System.out.println("branch: "+branchFileInfos);
        System.out.println("main: "+mainFileInfos);

        while ((!branchFileInfos.isEmpty()) &&(!mainFileInfos.isEmpty())) {
            // 브랜치의 0번 요소 가져오기
            String currData = branchFileInfos.get(0).get(0);
            System.out.println("data(branch):"+currData);
            // 메인에 해당 파일이 있는지 검사
            for (List<String> mainFileInfo: mainFileInfos) {
                if (mainFileInfo.contains(currData)) {
                    isIn = true;
                    index = mainFileInfos.indexOf(mainFileInfo);
                }
            }
            if (isIn) {  // 있으면
                System.out.println("* Isin:"+isIn);
                mergeResourceInfos.add(mapMergeResourceInfo(
                        branchFileInfos.get(0).get(0), //fileName
                        branchFileInfos.get(0).get(1), //fileLink
                        true,
                        true));
                branchFileInfos.remove(0);
                mainFileInfos.remove(index);
                isIn = false;
            } else { // 없으면
                System.out.println("* Isin:"+isIn);
                mergeResourceInfos.add(mapMergeResourceInfo(
                        branchFileInfos.get(0).get(0),
                        branchFileInfos.get(0).get(1),
                        false,
                        true));
                branchFileInfos.remove(0);
            }
            // 메인의 0번 요소 가져오기
            if (mainFileInfos.isEmpty()) {
                break;
            }
            currData = mainFileInfos.get(0).get(0);
            System.out.println("data(main):"+currData);
            // 브랜치에 해당 파일이 있는지 검사
            for (List<String> branchFileInfo: branchFileInfos) {
                if (branchFileInfo.contains(currData)) {
                    isIn = true;
                    index = branchFileInfos.indexOf(branchFileInfo);
                }
            }
            if (isIn) {  // 있으면
                System.out.println("* Isin:"+isIn);
                isIn = false;
            } else { // 없으면
                System.out.println("* Isin:"+isIn);
                mergeResourceInfos.add(mapMergeResourceInfo(
                        mainFileInfos.get(0).get(0),
                        mainFileInfos.get(0).get(1),
                        false,
                        false));
                mainFileInfos.remove(0);
            }
        }
        // 브랜치에 리소스 요소가 남은 경우
        if (!branchFileInfos.isEmpty()) {
            System.out.println("data(branch):" + branchFileInfos.get(0).get(0));

            for (List<String> branchFileInfo: branchFileInfos) {
                mergeResourceInfos.add(mapMergeResourceInfo(
                        branchFileInfos.get(0).get(0),
                        branchFileInfos.get(0).get(1),
                        false,
                        true));
            }
        }

        if (!mainFileInfos.isEmpty()) {
            System.out.println("data(main):" + branchFileInfos.get(0).get(0));
            for (List<String> mainFileInfo: mainFileInfos) {
                mergeResourceInfos.add(mapMergeResourceInfo(
                        mainFileInfos.get(0).get(0),
                        mainFileInfos.get(0).get(1),
                        false,
                        false));
            }
        }

        System.out.println("==============================");
        System.out.println("<mergeResourceInfo>");
        for (MergeResourceInfo mergeResourceInfo: mergeResourceInfos){
            System.out.println(mergeResourceInfo.getName());
            System.out.println(mergeResourceInfo.getLink());
        }

        return mergeResourceInfos;
    }

    private List<List<String>> getFileInfoList(List<Resource> resources) {
        List<List<String>> fileInfos = new ArrayList<>();
        for (Resource resource: resources) {
            fileInfos.add(Arrays.asList(resource.getName(), resource.getLink()));
        }
        return fileInfos;
    }

    private MergeResourceInfo mapMergeResourceInfo(String name,
                                                   String link,
                                                   boolean isDuplicated,
                                                   boolean isNew) {
        return MergeResourceInfo.builder()
                .name(name)
                .link(link)
                .isDuplicated(isDuplicated)
                .isNew(isNew)
                .build();
    }
}