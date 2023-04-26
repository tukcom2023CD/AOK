
package crepe.backend.domain.project.controller;

import crepe.backend.domain.project.dto.ProjectBranchInfoList;
import crepe.backend.domain.project.dto.ProjectCreateRequest;
import crepe.backend.domain.project.dto.ProjectInfo;
import crepe.backend.domain.project.dto.UserProjectCreateRequest;
import crepe.backend.domain.project.service.ProjectService;
import crepe.backend.domain.user.dto.UserInfoList;
import crepe.backend.global.response.ResultCode;
import crepe.backend.global.response.ResultResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.UUID;

@RequestMapping("/api/v1/projects")
@RestController
@RequiredArgsConstructor
public class ProjectController {
    private final ProjectService projectService;

    @PostMapping
    public ResponseEntity<ResultResponse> createProject(
            @Valid @RequestBody ProjectCreateRequest request) {
        ProjectInfo projectInfo = projectService.createProject(request);
        return ResponseEntity.ok(ResultResponse.of(ResultCode.CREATE_PROJECT_SUCCESS, projectInfo));
    }

    @GetMapping("/{uuid}")
    public ResponseEntity<ResultResponse> findProjectByUuid(@PathVariable UUID uuid) {
        ProjectInfo projectInfo = projectService.findProjectInfoByUuid(uuid);
        return ResponseEntity.ok(ResultResponse.of(ResultCode.READ_ONE_PROJECT_SUCCESS, projectInfo));
    }

    @GetMapping("/{uuid}/branches")
    public ResponseEntity<ResultResponse> findAllBranchByProjectUuid(@PathVariable UUID uuid) {
        ProjectBranchInfoList branchInfoList = projectService.findAllBranchInfoByUuid(uuid);
        return ResponseEntity.ok(ResultResponse.of(ResultCode.READ_PROJECT_BRANCH_SUCCESS, branchInfoList));
    }

    @GetMapping("/{uuid}/users")
    public ResponseEntity<ResultResponse> findAllUserByProjectUuid(@PathVariable UUID uuid) {
        UserInfoList userInfoList = projectService.findAllUserInfoByUuid(uuid);
        return ResponseEntity.ok(ResultResponse.of(ResultCode.READ_PROJECT_USER_SUCCESS, userInfoList));
    }

    @PostMapping("/users")
    public ResponseEntity<ResultResponse> createUserProject(
            //@PathVariable UUID uuid,
            @Valid @RequestBody UserProjectCreateRequest userProjectCreateRequest) {
        projectService.createUserProject(userProjectCreateRequest.getUserId(), userProjectCreateRequest.getProjectId());
        return  ResponseEntity.ok(ResultResponse.of(ResultCode.CREATE_USERPROJECT_SUCCESS,""));
    }

}
