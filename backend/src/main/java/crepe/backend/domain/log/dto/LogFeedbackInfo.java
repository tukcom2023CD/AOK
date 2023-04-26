package crepe.backend.domain.log.dto;


import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;


@Getter
@NoArgsConstructor
public class LogFeedbackInfo {
    private UUID UserUuid;
    private String Message;
    private UUID Uuid;

    @Builder
    public LogFeedbackInfo(UUID feedbackUserUuid,
                           String feedbackMessage,
                           UUID feedbackUuid) {
        this.UserUuid = feedbackUserUuid;
        this.Message = feedbackMessage;
        this.Uuid = feedbackUuid;
    }
}
