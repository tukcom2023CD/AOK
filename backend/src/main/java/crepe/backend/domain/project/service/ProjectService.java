
package crepe.backend.domain.project.service;

import crepe.backend.domain.branch.domain.entity.Branch;
import crepe.backend.domain.branch.domain.repository.BranchRepository;
import crepe.backend.domain.branch.dto.BranchInfo;
import crepe.backend.domain.project.dto.ProjectBranchInfoList;
import crepe.backend.domain.project.dto.ProjectBranchInfo;
import crepe.backend.domain.project.domain.entity.Project;
import crepe.backend.domain.project.domain.repository.ProjectRepository;
import crepe.backend.domain.project.dto.ProjectCreateRequest;
import crepe.backend.domain.project.dto.ProjectInfo;
import crepe.backend.domain.project.exception.EventDuplicationUserException;
import crepe.backend.domain.project.exception.NotFoundProjectEntityException;
import crepe.backend.domain.user.domain.entity.User;
import crepe.backend.domain.user.domain.repository.UserRepository;
import crepe.backend.domain.user.dto.UserInfo;
import crepe.backend.domain.user.dto.UserInfoList;
import crepe.backend.domain.user.exception.NotFoundUserEntityException;
import crepe.backend.domain.project.domain.entity.UserProject;
import crepe.backend.domain.project.domain.repository.UserProjectRepository;
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
    private final UserProjectRepository userProjectRepository;

    public ProjectInfo createProject(ProjectCreateRequest projectCreateRequest) {
        Project newProject = convertProjectFromRequest(projectCreateRequest);
        User foundUser = getUserById(projectCreateRequest.getUserId());
        Project savedProject = projectRepository.save(newProject);

        saveUserProject(foundUser, savedProject, true);
        //saveBranch(savedProject, "main");

        return mapProjectEntityToProjectInfoResponse(savedProject);
    }

    public void createUserProject(Long userId, Long projectId) {

        Project project = getProjectById(projectId);
        List<UserProject> userProjects = getUserProject(project);

        for(int i = 0; i < userProjects.size(); i ++)
        {
            if(userProjects.get(i).getUser().getId() == userId)
            {
                throw new EventDuplicationUserException();
            }
        }

        saveUserProject(getUserById(userId), getProjectById(projectId), false);
    }


    private void saveUserProject(User user, Project project, boolean isAdmin) {
        userProjectRepository.save(UserProject.builder()
                .user(user)
                .project(project)
                .isAdmin(isAdmin)
                .build());
    }

    private void saveBranch(Project project,String name) {
        branchRepository.save(Branch.builder()
                .project(project)
                .name(name)
                .build());
    }

    public ProjectInfo findProjectInfoByUuid(UUID uuid) {
        Project foundProject = findProjectByUuid(uuid);
        return mapProjectEntityToProjectInfoResponse(foundProject);
    }

    public ProjectBranchInfoList findAllBranchInfoByUuid(UUID uuid) {
        List<Branch> branches = branchRepository.findAllByProjectAndIsActiveTrue(findProjectByUuid(uuid));
        return getProjectBranchInfoList(branches);
    }

    public UserInfoList findAllUserInfoByUuid(UUID uuid) {
        List<UserProject> userProjects = userProjectRepository.findAllByProjectAndIsActiveTrue(findProjectByUuid(uuid));
        return getUserInfoList(getUserList(userProjects));
    }

    private List<User> getUserList(List<UserProject> userProjects) {
        List<User> users = new ArrayList<>();

        for(int i = 0; i < userProjects.size(); i++) {
            users.add(userProjects.get(i).getUser());
        }
        return users;
    }

    private UserInfoList getUserInfoList(List<User> users) {
        List<UserInfo> userInfos = new ArrayList<>();
        for(int i = 0; i < users.size(); i++) {
            userInfos.add(UserInfo.builder()
                    .uuid(users.get(i).getUuid())
                    .email(users.get(i).getEmail())
                    .nickname(users.get(i).getNickname())
                    .photo(users.get(i).getPhoto())
                    .build());
        }
        return new UserInfoList(userInfos);
    }
    private ProjectBranchInfoList getProjectBranchInfoList(List<Branch> branches) {
        List<ProjectBranchInfo> projectBranchInfos = new ArrayList<>();
        for(int i = 0; i < branches.size(); i++) {
            projectBranchInfos.add(ProjectBranchInfo.builder()
                    .name(branches.get(i).getName())
                    .uuid(branches.get(i).getUuid())
                    .build());
        }
        return new ProjectBranchInfoList(projectBranchInfos);
    }
    private Project convertProjectFromRequest(ProjectCreateRequest projectCreateRequest) {
        return Project.builder()
                .name(projectCreateRequest.getName())
                .build();
    }
    private User getUserById(Long userId) {
        return userRepository.findUserByIdAndIsActiveTrue(userId).orElseThrow(NotFoundUserEntityException::new);
    }

    public Project getProjectById(Long projectId) {
        return projectRepository.findProjectByIdAndIsActiveTrue(projectId).orElseThrow(NotFoundProjectEntityException::new);
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

    private List<UserProject> getUserProject(Project project)
    {
        return userProjectRepository.findAllByProjectAndIsActiveTrue(project);
    }
}
