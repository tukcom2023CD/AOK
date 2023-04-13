package crepe.backend.domain.project.service;

import crepe.backend.domain.branch.domain.entity.Branch;
import crepe.backend.domain.branch.domain.repository.BranchRepository;
import crepe.backend.domain.branch.dto.BranchInfo;
import crepe.backend.domain.branch.dto.BranchInfoList;
import crepe.backend.domain.branch.exception.NotFoundBranchEntityException;
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

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final UserRepository userRepository;

    private final BranchRepository branchRepository;

    public ProjectInfo createProject(ProjectCreateRequest projectCreateRequest) {
        Project newProject = convertProjectFromRequest(projectCreateRequest);
        Project savedProject = projectRepository.save(newProject);

        return mapProjectEntityToProjectInfoResponse(savedProject);
    }

    public ProjectInfo findProjectInfoByUuid(UUID uuid) {
        Project foundProject = findProjectByUuid(uuid);
        return mapProjectEntityToProjectInfoResponse(foundProject);
    }

    public BranchInfoList findAllBranchInfoByUuid(UUID uuid) {

        List<Branch> branches = branchRepository.findAllByProjectAndIsActiveTrue(findProjectByUuid(uuid)); //.orElseThrow(NotFoundBranchEntityException::new);
        return getBranchInfoList(branches);
    }

    private BranchInfoList getBranchInfoList(List<Branch> branches) {
        List<BranchInfo> branchInfos = new ArrayList<>();
        for(int i = 0; i < branches.size(); i++) {
            branchInfos.add(BranchInfo.builder()
                    .name(branches.get(i).getName())
                    .uuid(branches.get(i).getUuid())
                    .build());
        }
        return new BranchInfoList(branchInfos);
    }
    private Project convertProjectFromRequest(ProjectCreateRequest projectCreateRequest) {
        User foundUser = getUserById(projectCreateRequest.getUserId());
        //user-project에 정보 저장 필요, foundUser 어드민 권한 주기
        //main branch 생성되게 하기
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

