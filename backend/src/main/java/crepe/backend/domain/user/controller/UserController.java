package crepe.backend.domain.user.controller;

import crepe.backend.domain.project.dto.ProjectInfoList;
import crepe.backend.domain.user.dto.UserCreate;
import crepe.backend.domain.user.dto.UserCreateInfo;
import crepe.backend.domain.user.dto.UserInfo;
import crepe.backend.domain.user.service.UserService;
import crepe.backend.global.response.ResultResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.util.Map;
import java.util.UUID;

import static crepe.backend.global.response.ResultCode.*;

@RequestMapping("/api/vi/users")
@RestController
@RequiredArgsConstructor
public class UserController {

    public final UserService userService;

    // API 테스트를 위한 유저 추가
    @PostMapping
    public ResponseEntity<ResultResponse> createUser(@Valid @RequestBody UserCreate createrequest)
    {
        UserCreateInfo userInfo = userService.userCreate(createrequest);
        return ResponseEntity.ok(ResultResponse.of(CREATE_USER_SUCCESS, userInfo));
    }

    // UUID를 이용해 유저 찾기
    @GetMapping("/{user_uuid}")
    public ResponseEntity<ResultResponse> findById(@PathVariable UUID user_uuid)
    {
        UserInfo userInfo = userService.findUserInfoById(user_uuid);
        return ResponseEntity.ok(ResultResponse.of(READ_ONE_USER_SUCCESS, userInfo));
    }

    // UUID를 이용해서 해당 유저가 가지고 있는 프로젝트 가져오기
    @GetMapping("/{user_uuid}/projects")
    public ResponseEntity<ResultResponse> findByUserProjectById(@PathVariable UUID user_uuid)
    {
        ProjectInfoList projectList = userService.findUserProjectById(user_uuid);
        return ResponseEntity.ok(ResultResponse.of(READ_ALL_USER_PROJECT_SUCCESS, projectList));
    }

    @PatchMapping("/{user_uuid}")
    public ResponseEntity<ResultResponse> updateUser(@PathVariable UUID user_uuid, @RequestBody Map<String,String> request)
    {
        UserInfo updateUser = userService.updateUserInfo(user_uuid, request);
        return ResponseEntity.ok(ResultResponse.of(UPDATE_USER_SUCCESS, updateUser));
    }

    @DeleteMapping("/{user_uuid}")
    public ResponseEntity<ResultResponse> deleteUser(@PathVariable UUID user_uuid) {
        userService.deleteUser(user_uuid);
        return ResponseEntity.ok(ResultResponse.of(DELETE_USER_SUCCESS, ""));
    }
}
