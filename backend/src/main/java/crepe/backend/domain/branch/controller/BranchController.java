package crepe.backend.domain.branch.controller;

import crepe.backend.domain.branch.dto.BranchCreate;
import crepe.backend.domain.branch.dto.BranchCreateInfo;
import crepe.backend.domain.branch.dto.BranchInfo;
import crepe.backend.domain.branch.service.BranchService;
import crepe.backend.domain.log.dto.LogInfoList;
import crepe.backend.global.response.ResultResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

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
        LogInfoList logInfos = branchService.findLogInfoByUuid(uuid);
        return ResponseEntity.ok(ResultResponse.of(READ_BRANCH_LOG_SUCCESS, logInfos));
    }
}