package crepe.backend.domain.project.service;

import crepe.backend.domain.project.domain.entity.Project;
import crepe.backend.domain.project.domain.repository.ProjectRepository;
import crepe.backend.domain.project.dto.ProjectCreateRequest;
import crepe.backend.domain.project.dto.ProjectInfo;
import crepe.backend.domain.project.exception.NotFoundProjectEntityException;
import crepe.backend.domain.user.domain.entity.User;
import crepe.backend.domain.user.domain.repository.UserRepository;
import crepe.backend.domain.user.exception.NotFoundUserEntityException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final UserRepository userRepository;

    public ProjectInfo createProject(ProjectCreateRequest projectCreateRequest) {
        Project newProject = convertProjectFromRequest(projectCreateRequest);
        Project savedProject = projectRepository.save(newProject);

        return mapProjectEntityToProjectInfoResponse(savedProject);
    }

    public ProjectInfo findProjectInfoById(UUID uuid) {
        Project foundProject = findProjectByUuid(uuid);
        return mapProjectEntityToProjectInfoResponse(foundProject);
    }

    private Project convertProjectFromRequest(ProjectCreateRequest projectCreateRequest) {
        User foundUser = getUserById(projectCreateRequest.getUserId());
        //user-project에 정보 저장 필요, foundUser 어드민 권한 주기
        return Project.builder()
                .name(projectCreateRequest.getName())
                .build();
    }
    private User getUserById(Long userId) {
        return userRepository.findUserByIdAndIsActiveTrue(userId).orElseThrow(NotFoundUserEntityException::new);
    }

    private ProjectInfo mapProjectEntityToProjectInfoResponse(Project project) {
        return ProjectInfo.builder()
                .name(project.getName())
                .uuid(project.getUuid())
                .build();
    }

    private Project findProjectByUuid(UUID uuid) {
        return projectRepository.findProjectByUuidAndIsActiveTrue(uuid).orElseThrow(NotFoundProjectEntityException::new);
    }
}

