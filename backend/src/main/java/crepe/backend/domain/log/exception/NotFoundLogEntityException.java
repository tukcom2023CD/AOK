package crepe.backend.domain.log.exception;

import crepe.backend.global.exception.BusinessException;
import crepe.backend.global.response.ErrorCode;

public class NotFoundLogEntityException extends BusinessException {
    public NotFoundLogEntityException() {super(ErrorCode.LOG_NOT_FOUND);}

}
