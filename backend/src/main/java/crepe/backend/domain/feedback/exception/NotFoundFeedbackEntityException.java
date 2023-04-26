package crepe.backend.domain.feedback.exception;

import crepe.backend.global.exception.BusinessException;
import crepe.backend.global.response.ErrorCode;

public class NotFoundFeedbackEntityException extends BusinessException {

    public NotFoundFeedbackEntityException()
    {
        super(ErrorCode.FEEDBACK_NOT_FOUND);
    }
}
