package crepe.backend.domain.branch.exception;

import crepe.backend.global.exception.BusinessException;
import crepe.backend.global.response.ErrorCode;

public class NotFoundBranchEntityException extends BusinessException {
    public NotFoundBranchEntityException() {super(ErrorCode.BRANCH_NOT_FOUND);}
}
