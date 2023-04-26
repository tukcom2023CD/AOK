package crepe.backend.global.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ErrorCode {

    // user
    USER_NOT_FOUND(400, "U001", "유저를 찾기 실패"),
    USER_EVENT_DUPLICATION(400, "U002", "중복된 유저"),

    // project
    PROJECT_NOT_FOUND(400, "P001", "프로젝트 찾기 실패"),

    // branch
    BRANCH_NOT_FOUND(400, "B001", "브랜치 찾기 실패"),

    // file
    EMPTY_FILES(400, "F001", "전달된 파일 없음"),
    FILE_UPLOAD_ERROR(400, "F002", "파일 업로드 실패"),
    FILE_VALID_ERROR(400, "F003", "파일이 유효하지 않음"),
    FILE_FORMAT_ERROR(400, "F004", "파일 포멧이 유효하지 않음"),

    // resource
    RESOURCE_CREATE_ERROR(400, "R001", "리소스 생성 실패"),
    RESOURCE_NOT_FOUND(400, "R002", "리소스 조회 실패"),

    // log
    LOG_CREATE_ERROR(400, "L001", "로그 생성 실패"),
    LOG_NOT_FOUND(400, "L002", "단일 로그 조회 실패"),

    // layer
    LAYER_CREATE_ERROR(400, "LY001", "레이어 생성 실패"),

    // feedback
    FEEDBACK_NOT_FOUND(400, "F001", "피드백 찾기 실패"),

    // dummy
    DUMMY_ERROR(400, "D001", "여기서 에러 발생")

    ;

    private final int status;
    private final String code;
    private final String message;
}
