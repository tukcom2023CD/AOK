package crepe.backend.domain.log.service;

import crepe.backend.domain.branch.domain.entity.Branch;
import crepe.backend.domain.branch.domain.repository.BranchRepository;
import crepe.backend.domain.branch.exception.NotFoundBranchEntityException;
import crepe.backend.domain.feedback.domain.entity.Feedback;
import crepe.backend.domain.feedback.domain.repository.FeedbackRepository;
import crepe.backend.domain.log.domain.entity.Layer;
import crepe.backend.domain.log.domain.entity.Log;
import crepe.backend.domain.log.domain.entity.Resource;
import crepe.backend.domain.log.domain.repository.LayerRepository;
import crepe.backend.domain.log.domain.repository.LogRepository;
import crepe.backend.domain.log.domain.repository.ResourceRepository;
import crepe.backend.domain.log.dto.*;
import crepe.backend.domain.log.exception.NotFoundLogEntityException;
import crepe.backend.domain.project.exception.NotFoundResourceEntity;
import crepe.backend.domain.user.domain.entity.User;
import crepe.backend.domain.user.domain.repository.UserRepository;
import crepe.backend.domain.user.dto.UserInfo;
import crepe.backend.domain.user.dto.UserInfoList;
import crepe.backend.domain.user.exception.NotFoundUserEntityException;
import crepe.backend.global.exception.BusinessException;
import crepe.backend.global.response.ErrorCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;


@Service
@RequiredArgsConstructor
public class LogService {
    private final LogRepository logRepository;
    private final UserRepository userRepository;
    private final BranchRepository branchRepository;
    private final LayerRepository layerRepository;
    private final ResourceRepository resourceRepository;
    private final FeedbackRepository feedbackRepository;

    public LogUuidInfo createLogUuidInfo(Log log) {
        return LogUuidInfo.builder()
                .uuid(log.getUuid())
                .createdAt(log.getCreatedAt())
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

    public LogInfo findLogInfoByUuid(UUID uuid){
        //레이어 전부 읽어서
        Log log = getLogByUuid(uuid);
        List<Layer> layers = layerRepository.findAllByLogAndIsActiveTrueOrderBySequence(log);


        List<Resource> resources = new ArrayList<>();
        for(Layer layer: layers) { //리소스 리스트 만들기
            resources.add(getResourceById(layer.getResource().getId()));
        }

        List<Feedback> feedbacks = feedbackRepository.findAllByLogAndIsActiveTrueOrderByCreatedAtDesc(log);

        return LogInfo.builder()
                .userUuid(log.getUuid())
                .message(log.getMessage())
                .createdAt(log.getCreatedAt())
                .resourceInfos(getResourceInfoList(resources))
                .feedbackInfos(getLogFeedbackInfoList(feedbacks))
                .build();
    }

    public void deleteLog(UUID uuid) {
        logRepository.deleteById(getLogByUuid(uuid).getId());
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

    private Log getLogByUuid(UUID uuid) {
        return logRepository.findLogByUuidAndIsActiveTrue(uuid).orElseThrow(NotFoundLogEntityException::new);
    }

    private Resource getResourceById(Long id) {
        return resourceRepository.findResourceByIdAndIsActiveTrue(id).orElseThrow(NotFoundResourceEntity::new);
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

    private List<ResourceInfo> getResourceInfoList(List<Resource> resources) {
        List<ResourceInfo> resourceInfos = new ArrayList<>();
        for(Resource resource: resources) {
            resourceInfos.add(ResourceInfo.builder()
                            .fileName(resource.getName())
                            .fileLink(resource.getLink())
                            .fileUuid(resource.getUuid())
                            .build());
        }
        return resourceInfos;
    }


    private List<LogFeedbackInfo> getLogFeedbackInfoList(List<Feedback> feedbacks) {
        List<LogFeedbackInfo> logFeedbackInfos = new ArrayList<>();
        for(Feedback feedback: feedbacks) {
            logFeedbackInfos.add(LogFeedbackInfo.builder()
                    .feedbackMessage(feedback.getMessage())
                    .feedbackUserUuid(feedback.getUser().getUuid())
                    .feedbackUuid(feedback.getUuid())
                    .build());
        }
        return logFeedbackInfos;
    }
}
