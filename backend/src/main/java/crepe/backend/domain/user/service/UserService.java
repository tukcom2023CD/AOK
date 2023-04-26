package crepe.backend.domain.user.service;

import crepe.backend.domain.project.domain.entity.Project;
import crepe.backend.domain.project.domain.repository.ProjectRepository;
import crepe.backend.domain.project.dto.ProjectInfo;
import crepe.backend.domain.project.dto.ProjectInfoList;
import crepe.backend.domain.project.exception.NotFoundProjectEntityException;
import crepe.backend.domain.user.domain.entity.User;
import crepe.backend.domain.project.domain.entity.UserProject;
import crepe.backend.domain.user.dto.UserCreate;
import crepe.backend.domain.user.dto.UserCreateInfo;
import crepe.backend.domain.user.dto.UserInfo;
import crepe.backend.domain.project.domain.repository.UserProjectRepository;
import crepe.backend.domain.user.domain.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import crepe.backend.domain.user.exception.NotFoundUserEntityException;


import java.util.*;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final UserProjectRepository userProjectRepository;
    private final ProjectRepository projectRepository;

    // 테스트를 위한 유저 추가와 관련된 코드
    public UserCreateInfo userCreate(UserCreate usercreate) {
        User userdata = changeUserInfoToUser(usercreate);
        User savedata = userRepository.save(userdata);
        return mapUserEntityToUserCreateInfo(savedata);
    }

    private User changeUserInfoToUser(UserCreate usercreate) {
        return User.builder()
                .email(usercreate.getEmail())
                .password(usercreate.getPassword())
                .photo(usercreate.getPhoto())
                .nickname(usercreate.getNickname())
                .build();
    }

    private UserCreateInfo mapUserEntityToUserCreateInfo(User savedUser) {
        return UserCreateInfo.builder()
                .uuid(savedUser.getUuid())
                .build();
    }

    // uuid로 유저 찾기
    public UserInfo findUserInfoById(UUID user_uuid) {
        User findUser = findUserByUuId(user_uuid);
        return mapUserEntityToUserInfo(findUser);
    }

    // uuid를 이용해서 유저가 포함되어있는 프로젝트 찾는 함수
    public ProjectInfoList findUserProjectById(UUID user_uuid)
    {
        User findUser = findUserByUuId(user_uuid);
        List<Project> projects = getProjectList(findUser);
        return getProjectInfoList(projects);
    }

    public void updateUserInfo(UUID user_uuid, Map<String, String> user)
    {
        User oUser = findUserByUuId(user_uuid);

        oUser.updateUser(user.get("email"), user.get("password"), user.get("nickname"), user.get("photo"));

        userRepository.save(oUser);
    }

    public void deleteUser(UUID uuid) {
        User user = findUserByUuId(uuid);
        userRepository.deleteById(user.getId());
    }

    private UserInfo mapUserEntityToUserInfo(User savedUser) {
        return UserInfo.builder()
                .uuid(savedUser.getUuid())
                .email(savedUser.getEmail())
                .nickname(savedUser.getNickname())
                .photo(savedUser.getPhoto())
                .build();
    }

    private ProjectInfoList getProjectInfoList(List<Project> projects)
    {
        List<ProjectInfo> projectInfos = new ArrayList<>();

        for(int i = 0; i < projects.size(); i ++)
        {
            projectInfos.add(ProjectInfo.builder()
                    .name(projects.get(i).getName())
                    .uuid(projects.get(i).getUuid())
                    .build());
        }

        return new ProjectInfoList(projectInfos);
    }

    // 해당 uuid의 유저를 얻기 위한 함수
    public User findUserByUuId(UUID user_uuid)
    {
        return userRepository.findUserByUuidAndIsActiveTrue(user_uuid).orElseThrow(NotFoundUserEntityException::new);
    }

    // 유저가 속해있는 프로젝트 ID를 얻기 위한 함수
    private List<Project> getProjectList(User user)
    {
        List<UserProject> userProjects = userProjectRepository.findAllByUserAndIsActiveTrue(user);
        List<Project> projects = new ArrayList<>();

        for (UserProject userProject: userProjects) {
            projects.add(userProject.getProject());
        }
        return projects;
    }




    public User findUserById(Long id)
    {
        return userRepository.findUserByIdAndIsActiveTrue(id).orElseThrow(NotFoundUserEntityException::new);
    }
}
