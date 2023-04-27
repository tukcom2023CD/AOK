package crepe.backend.global.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ResultCode {

    // user
    CREATE_USER_SUCCESS(200, "U001", "사용자 추가 성공"),
    READ_ONE_USER_SUCCESS(200, "U003", "사용자 정보 조회 성공"),
    UPDATE_USER_SUCCESS(200, "U004", "사용자 정보 수정 성공"),
    DELETE_USER_SUCCESS(200, "U005", "사용자 삭제 성공"),
    READ_ALL_USER_PROJECT_SUCCESS(200, "U006", "전체 프로젝트 조회 성공"),
    
    // project
    CREATE_PROJECT_SUCCESS(200,"P001", "프로젝트 생성 성공"),
    READ_ONE_PROJECT_SUCCESS(200,"P002", "특정 프로젝트 조회 성공"),
    READ_PROJECT_BRANCH_SUCCESS(200,"P003", "특정 프로젝트에 생성된 브랜치 정보 조회 성공"),
    READ_PROJECT_USER_SUCCESS(200,"P004", "특정 프로젝트에 참여 중인 유저 정보 조회 성공"),
    UPDATE_PROJECT_SUCCESS(200,"P005", "프로젝트 수정 성공"),
    DELETE_PROJECT_SUCCESS(200,"P006", "프로젝트 삭제 성공"),
    CREATE_USERPROJECT_SUCCESS(200, "P007", "프로젝트에 유저 추가 성공"),

    // log
    CREATE_LOG_SUCCESS(200,"L001", "로그 생성 성공"),
    READ_ONE_LOG_SUCCESS(200,"L002", "특정 로그 조회 성공"),
    DELETE_LOG_SUCCESS(200,"L003", "로그 삭제 성공"),

    // branch
    CREATE_BRANCH_SUCCESS(200, "B001", "브랜치 생성 성공"),
    READ_BRANCH_LOG_SUCCESS(200, "B002", "특정 브랜치 로그 정보 조회 성공"),
    READ_ONE_BRANCH_SUCCESS(200, "B003", "브랜치 정보 조회 성공"),
    UPDATE_BRANCH_SUCCESS(200,"B004", "브랜치 정보 수정 성공"),
    DELETE_BRANCH_SUCCESS(200,"B005", "브랜치 삭제 성공"),
    READ_BRANCH_RECENT_LOG_SUCCESS(200, "B006", "특정 브랜치 최신 로그 정보 조회 성공"),

    READ_BRANCH_MERGE_LIST(200, "B007", "브랜치 머지 리스트 조회 성공"),


    // feedback
    CREATE_FEEDBACK_SUCCESS(200, "F001", "피드백 생성 성공"),
    DELETE_FEEDBACK_SUCCESS(200, "F002", "피드백 삭제 성공")


    ;

    private int status;
    private final String code;
    private final String message;

}
