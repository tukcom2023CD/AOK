package crepe.backend.domain.user.exception;

import crepe.backend.global.exception.BusinessException;
import crepe.backend.global.response.ErrorCode;

public class NotFoundUserEntityException extends BusinessException {
    public NotFoundUserEntityException() {
        super(ErrorCode.USER_NOT_FOUND);
    }
}