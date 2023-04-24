package crepe.backend.domain.project.exception;

import crepe.backend.global.exception.BusinessException;
import crepe.backend.global.response.ErrorCode;

public class EventDuplicationUserException extends BusinessException {

    public EventDuplicationUserException(){
        super(ErrorCode.USER_EVENT_DUPLICATION);
    }
}
