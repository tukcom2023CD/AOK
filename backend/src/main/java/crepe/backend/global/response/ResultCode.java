package crepe.backend.global.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ResultCode {



    // user
    CREATE_USER_SUCCESS("U001", "사용자 추가 성공"),
    READ_ONE_USER_SUCCESS("U003", "사용자 정보 조회 성공"),
    DELETE_USER_SUCCESS("U004", "사용자 삭제 성공"),
    READ_ALL_USER_PROJECT_SUCCESS("U006", "전체 프로젝트 조회 성공"),

    // project
    CREATE_PROJECT_SUCCESS("P001", "프로젝트 생성 성공"),
    READ_ONE_PROJECT_SUCCESS("P002", "특정 프로젝트 조회 성공"),
    READ_PROJECT_USER_SUCCESS("P003", "특정 프로젝트에 참여중인 유저 정보 조회 성공"),
    UPDATE_PROJECT_SUCCESS("P004", "프로젝트 수정 성공"),
    DELETE_PROJECT_SUCCESS("P005", "프로젝트 삭제 성공"),
    ;


    private final String code;
    private final String message;

}
