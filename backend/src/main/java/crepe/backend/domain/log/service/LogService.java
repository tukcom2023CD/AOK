package crepe.backend.domain.log.service;

import crepe.backend.domain.branch.domain.entity.Branch;
import crepe.backend.domain.branch.domain.repository.BranchRepository;
import crepe.backend.domain.branch.exception.NotFoundBranchEntityException;
import crepe.backend.domain.log.domain.entity.Layer;
import crepe.backend.domain.log.domain.entity.Log;
import crepe.backend.domain.log.domain.entity.Resource;
import crepe.backend.domain.log.domain.repository.LayerRepository;
import crepe.backend.domain.log.domain.repository.LogRepository;
import crepe.backend.domain.log.domain.repository.ResourceRepository;
import crepe.backend.domain.log.dto.LogCreateRequest;
import crepe.backend.domain.log.dto.LogUuidInfo;
import crepe.backend.domain.user.domain.entity.User;
import crepe.backend.domain.user.domain.repository.UserRepository;
import crepe.backend.domain.user.exception.NotFoundUserEntityException;
import crepe.backend.global.exception.BusinessException;
import crepe.backend.global.response.ErrorCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class LogService {
    private final LogRepository logRepository;
    private final UserRepository userRepository;
    private final BranchRepository branchRepository;

    private final LayerRepository layerRepository;

    public LogUuidInfo createLogUuidInfo(Log log) {
        return LogUuidInfo.builder()
                .uuid(log.getUuid())
                .build();
    }
    public Log createLog(LogCreateRequest request) {

        try {
            Log log = createLogEntity(
                    getBranchById(request.getBranchId()),
                    getUserById(request.getUserId()),
                    request.getMessage());

            return logRepository.save(log);
        } catch(Exception e) {
            throw new BusinessException(ErrorCode.LOG_CREATE_ERROR);
        }
    }

    private Log createLogEntity(Branch branch, User user, String message) {
        return Log.builder()
                .branch(branch)
                .user(user)
                .message(message)
                .build();
    }

    private User getUserById(Long userId) {
        return userRepository.findUserByIdAndIsActiveTrue(userId).orElseThrow(NotFoundUserEntityException::new);
    }

    private Branch getBranchById(Long branchId) {
        return branchRepository.findBranchByIdAndIsActiveTrue(branchId).orElseThrow(NotFoundBranchEntityException::new);
    }


    public void createLayer(Log log, List<Resource> resources) {
        int index = 0;
        for(Resource resource:resources) {
            try {
                createLayerEntity(log, resource, index++);
            } catch(Exception e) {
                throw new BusinessException(ErrorCode.LAYER_CREATE_ERROR);
            }
        }
    }

    private void createLayerEntity(Log log, Resource resource, int sequence) {
        Layer layer = Layer.builder()
                .log(log)
                .resource(resource)
                .sequence(sequence)
                .build();

        layerRepository.save(layer);
    }
}
