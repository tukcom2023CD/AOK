package crepe.backend.domain.feedback.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Builder
@Getter
@RequiredArgsConstructor
public class FeedbackCreate {

    private final Long userId;

    private final Long logId;

    private final String message;
}
