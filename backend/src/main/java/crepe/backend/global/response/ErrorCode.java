package crepe.backend.global.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ErrorCode {

    // USER
    USER_NOT_FOUND(400, "U001", "유저를 찾기 실패"),
    USER_EVENT_DUPLICATION(400, "U002", "중복된 유저"),

    // PROJECT
    PROJECT_NOT_FOUND(400, "P001", "프로젝트 찾기 실패"),

    //BRANCH
    BRANCH_NOT_FOUND(400, "B001", "브랜치 찾기 실패"),
    ;

    private final int status;
    private final String code;
    private final String message;
}
