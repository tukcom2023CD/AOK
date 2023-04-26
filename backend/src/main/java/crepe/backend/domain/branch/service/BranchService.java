package crepe.backend.domain.branch.service;

import crepe.backend.domain.branch.domain.entity.Branch;
import crepe.backend.domain.branch.domain.repository.BranchRepository;
import crepe.backend.domain.branch.dto.*;
import crepe.backend.domain.log.domain.entity.Log;
import crepe.backend.domain.log.domain.repository.LogRepository;

import crepe.backend.domain.project.domain.entity.Project;
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
    public BranchRecentLogInfo findRecentLogInfoByUuid(UUID uuid) {
        Branch branch = findBranchByUuid(uuid);
        Log log = getRecentLogByBranch(branch);
        return BranchRecentLogInfo.builder()
                .uuid(log.getUuid())
                .build();
    }
}