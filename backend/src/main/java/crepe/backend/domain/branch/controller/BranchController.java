package crepe.backend.domain.branch.controller;

import crepe.backend.domain.branch.dto.*;
import crepe.backend.domain.branch.service.BranchService;
import crepe.backend.domain.log.dto.LogInfoList;
import crepe.backend.global.response.ResultResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.util.List;
import java.util.Map;
import java.util.UUID;

import static crepe.backend.global.response.ResultCode.*;

@RequiredArgsConstructor
@RequestMapping("/api/v1/branches")
@RestController
public class BranchController {

    private final BranchService branchService;

    @PostMapping
    public ResponseEntity<ResultResponse> createBranch(@Valid @RequestBody BranchCreate createrequest)
    {
        BranchCreateInfo branchInfo = branchService.branchCreate(createrequest);
        return ResponseEntity.ok(ResultResponse.of(CREATE_BRANCH_SUCCESS, branchInfo));
    }

    @GetMapping("/{uuid}")
    public ResponseEntity<ResultResponse> findBranchByUuid(@PathVariable UUID uuid)
    {
        BranchInfo branchInfo = branchService.findBranchInfoByUuId(uuid);
        return ResponseEntity.ok(ResultResponse.of(READ_ONE_BRANCH_SUCCESS, branchInfo));
    }

    @GetMapping("/{uuid}/logs")
    public ResponseEntity<ResultResponse> findLogByUuid(@PathVariable UUID uuid)
    {
        BranchLogInfoList branchLogInfoList = branchService.findLogInfoByUuid(uuid);
        return ResponseEntity.ok(ResultResponse.of(READ_BRANCH_LOG_SUCCESS, branchLogInfoList));
    }

    @GetMapping("/{uuid}/logs/recent")
    public ResponseEntity<ResultResponse> findRecentLogByUuid(@PathVariable UUID uuid)
    {
        BranchRecentLogInfo branchRecentLogInfo = branchService.findRecentLogInfoByUuid(uuid);
        return ResponseEntity.ok(ResultResponse.of(READ_BRANCH_RECENT_LOG_SUCCESS, branchRecentLogInfo));
    }

    @GetMapping("/{uuid}/merge")
    public ResponseEntity<ResultResponse> getMergeResourceListByUuid(@PathVariable UUID uuid)
    {
        List<MergeResourceInfo> mergeResourceInfos = branchService.getMergeResources(uuid);
        MergeResourceInfoList mergeResourceInfoList = new MergeResourceInfoList();
        mergeResourceInfoList.addAllMergeResourceInfo(mergeResourceInfos);
        return ResponseEntity.ok(ResultResponse.of(READ_BRANCH_MERGE_LIST, mergeResourceInfoList));
    }


    @PatchMapping("/{uuid}")
    public ResponseEntity<ResultResponse> updateBranch(@PathVariable UUID uuid, @RequestBody Map<String,String> request)
    {
        branchService.updateBranchInfo(uuid, request);
        return ResponseEntity.ok(ResultResponse.of(UPDATE_BRANCH_SUCCESS, ""));
    }

    @DeleteMapping("/{uuid}")
    public ResponseEntity<ResultResponse> deleteBranch(@PathVariable UUID uuid) {
        branchService.deleteBranch(uuid);
        return ResponseEntity.ok(ResultResponse.of(DELETE_BRANCH_SUCCESS, ""));
    }
}