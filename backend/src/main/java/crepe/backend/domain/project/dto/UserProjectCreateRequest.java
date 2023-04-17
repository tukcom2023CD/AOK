package crepe.backend.domain.project.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.validation.constraints.NotNull;

@Builder
@Getter
@RequiredArgsConstructor
public class UserProjectCreateRequest {

    private final Long projectId;
    private final Long userId;
}
