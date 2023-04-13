package crepe.backend.domain.user.service;

import crepe.backend.domain.project.domain.entity.Project;
/*import crepe.backend.domain.project.repository.repository.ProjectRepository;*/
import crepe.backend.domain.user.domain.entity.User;
import crepe.backend.domain.user.domain.entity.UserProject;
import crepe.backend.domain.user.dto.UserCreate;
import crepe.backend.domain.user.dto.UserInfo;
/*import crepe.backend.domain.user.dto.UserProjectList;
import crepe.backend.domain.user.repository.UserProjectRepository;*/
import crepe.backend.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
/*    private final UserProjectRepository userProjectRepository;
    private final ProjectRepository projectRepository;*/

    // 테스트를 위한 유저 추가와 관련된 코드
    public UserInfo userCreate(UserCreate usercreate) {
        User userdata = changeUserInfoToUser(usercreate);
        User savedata = userRepository.save(userdata);
        return mapUserEntityToUserInfo(savedata);
    }

    private User changeUserInfoToUser(UserCreate usercreate) {
        return User.builder()
                .email(usercreate.getEmail())
                .password(usercreate.getPasswd())
                .photo(usercreate.getPhoto())
                .nickname(usercreate.getNickname())
                .build();
    }

    // uuid로 유저 찾기
    public UserInfo findUserInfoById(UUID user_uuid) {
        User findUser = findUserById(user_uuid);
        return mapUserEntityToUserInfo(findUser);
    }

    public UserInfo mapUserEntityToUserInfo(User savedUser) {
        return UserInfo.builder()
                .uuid(savedUser.getUuid())
                .id(savedUser.getId())
                .email(savedUser.getEmail())
                .nickname(savedUser.getNickname())
                .photo(savedUser.getPhoto())
                .createdAt(savedUser.getCreatedAt())
                .updatedAt(savedUser.getUpdatedAt())
                .build();
    }

/*    // uuid를 이용해서 유저가 포함되어있는 프로젝트 찾는 함수
    public UserProjectList findUserProjectById(UUID user_uuid)
    {
        User findUser = findUserById(user_uuid);
        List<Long> projects = findProjectsById(findUser.getId());
        List<Project> findprojects = findProjectById(projects);

        return new UserProjectList(findprojects);
    }*/

    // 해당 uuid의 유저를 얻기 위한 함수
    private User findUserById(UUID user_uuid)
    {
        return userRepository.findUserByUuid(user_uuid);
    }

/*    // 유저가 속해있는 프로젝트 ID를 얻기 위한 함수
    private List<Long> findProjectsById(Long user_id)
    {
        List<UserProject> userProjects = userProjectRepository.findUserProjectByUser_Id(user_id);

        List<Long> projects = new ArrayList<>(); // 프로젝트 ID를 얻기 위한 리스트 객체 생성

        if(userProjects.size() == 0)
        {
            return projects;
        }
        else
        {
            for(int i = 0; i < userProjects.size(); i ++)
            {
                projects.add(userProjects.get(i).getId());
            }

            return projects;
        }
    }*/

/*    // 프로젝트 ID 들로 프로젝트 찾기
    private List<Project> findProjectById(List<Long> projects)
    {
        return projectRepository.findProjectByIdIn(projects);
    }*/
}
