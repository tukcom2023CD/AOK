package crepe.backend.domain.project.exception;

import crepe.backend.global.exception.BusinessException;
import crepe.backend.global.response.ErrorCode;

public class NotFoundProjectEntityException extends BusinessException {
    public NotFoundProjectEntityException() {
        super(ErrorCode.PROJECT_NOT_FOUND);
    }

}
