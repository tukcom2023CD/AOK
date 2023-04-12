package crepe.backend.domain.project.controller;

import crepe.backend.domain.project.dto.ProjectCreateRequest;
import crepe.backend.domain.project.dto.ProjectInfo;
import crepe.backend.domain.project.service.ProjectService;
import crepe.backend.global.response.ResultCode;
import crepe.backend.global.response.ResultResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

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

}
