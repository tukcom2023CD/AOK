package crepe.backend.domain.log.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Getter
@NoArgsConstructor
public class LogInfo {
    private UUID UserUuid;
    private String Message;
    private LocalDateTime createdAt;
    private List<ResourceInfo> resourceInfos;
    private List<LogFeedbackInfo> feedbackInfos;


    @Builder
    public LogInfo(UUID logUserUuid,
                   String logMessage,
                   LocalDateTime createdAt,
                   List<ResourceInfo> resourceInfos,
                   List<LogFeedbackInfo> feedbackInfos) {

        this.UserUuid = logUserUuid;
        this.Message = logMessage;
        this.createdAt = createdAt;
        this.resourceInfos = resourceInfos;
        this.feedbackInfos = feedbackInfos;

    }
}
