package crepe.backend.global.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ErrorCode {

    // USER
    USER_NOT_FOUND(400, "U001", "유저를 찾기 실패"),
    PROJECT_NOT_FOUND(400, "P001", "프로젝트 찾기 실패"),

    BRANCH_NOT_FOUND(400, "B001", "브랜치 찾기 실패"),

    EMPTY_FILES(400, "F001", "전달된 파일 없음"),
    FILE_UPLOAD_ERROR(400, "F002", "파일 업로드 실패"),
    FILE_VALID_ERROR(400, "F003", "파일이 유효하지 않음"),
    FILE_FORMAT_ERROR(400, "F004", "파일 포멧이 유효하지 않음")

            ;

    private final int status;
    private final String code;
    private final String message;
}
