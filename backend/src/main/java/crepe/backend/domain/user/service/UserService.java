package crepe.backend.domain.user.service;

import crepe.backend.domain.user.domain.entity.User;
import crepe.backend.domain.user.dto.UserCreate;
import crepe.backend.domain.user.dto.UserInfo;
import crepe.backend.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    // 테스트를 위한 유저 추가와 관련된 코드
    public UserInfo userCreate(UserCreate usercreate)
    {
        User userdata = changeUserInfoToUser(usercreate);
        User savedata = userRepository.save(userdata);
        return mapUserEntityToUserInfoResponse(savedata);
    }

    private User changeUserInfoToUser(UserCreate usercreate)
    {
        return User.builder()
                .email(usercreate.getEmail())
                .password(usercreate.getPasswd())
                .photo(usercreate.getPhoto())
                .nickname(usercreate.getNickname())
                .build();
    }

    // uuid로 유저 찾기
    public UserInfo findUserInfoById(UUID user_uuid)
    {
        User findUser = findUserById(user_uuid);
        User savedUser = userRepository.save(findUser);
        return mapUserEntityToUserInfoResponse(savedUser);
    }

    public UserInfo mapUserEntityToUserInfoResponse(User savedUser)
    {
        return UserInfo.builder()
                .id(savedUser.getId())
                .email(savedUser.getEmail())
                .nickname(savedUser.getNickname())
                .photo(savedUser.getPhoto())
                .createdAt(savedUser.getCreatedAt())
                .updatedAt(savedUser.getUpdatedAt())
                .build();
    }

    private User findUserById(UUID user_uuid)
    {
        return userRepository.findUserById(user_uuid);
    }
}
