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
    private ResourceInfoList resourceInfoList;
    private LogFeedbackInfoList logFeedbackInfoList;


    @Builder
    public LogInfo(UUID logUserUuid,
                   String logMessage,
                   LocalDateTime createdAt,
                   ResourceInfoList resourceInfoList,
                   LogFeedbackInfoList logFeedbackInfoList) {

        this.UserUuid = logUserUuid;
        this.Message = logMessage;
        this.createdAt = createdAt;
        this.resourceInfoList = resourceInfoList;
        this.logFeedbackInfoList = logFeedbackInfoList;

    }

}
