package crepe.backend.domain.project.exception;

import crepe.backend.global.exception.BusinessException;
import crepe.backend.global.response.ErrorCode;

public class NotFoundResourceEntity extends BusinessException {
    public NotFoundResourceEntity() {
        super(ErrorCode.RESOURCE_NOT_FOUND);
    }
}
