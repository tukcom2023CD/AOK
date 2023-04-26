package crepe.backend.domain.feedback.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.UUID;

@Getter
@RequiredArgsConstructor
public class FeedbackCreateInfo {

    private UUID uuid;

    @Builder
    public FeedbackCreateInfo(UUID uuid)
    {
        this.uuid = uuid;
    }
}
