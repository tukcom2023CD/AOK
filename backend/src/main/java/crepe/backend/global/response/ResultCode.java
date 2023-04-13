package crepe.backend.global.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ResultCode {


    // project
    CREATE_PROJECT_SUCCESS(200,"P001", "프로젝트 생성 성공"),
    READ_ONE_PROJECT_SUCCESS(200,"P002", "특정 프로젝트 조회 성공"),
    READ_PROJECT_BRANCH_SUCCESS(200,"P003", "특정 프로젝트에 참여중인 유저 정보 조회 성공"),
    READ_PROJECT_USER_SUCCESS(200,"P004", "특정 프로젝트에 참여중인 유저 정보 조회 성공"),
    UPDATE_PROJECT_SUCCESS(200,"P005", "프로젝트 수정 성공"),
    DELETE_PROJECT_SUCCESS(200,"P006", "프로젝트 삭제 성공"),
    ;

    private int status;
    private final String code;
    private final String message;

}
