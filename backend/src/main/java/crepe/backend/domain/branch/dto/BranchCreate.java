package crepe.backend.domain.branch.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Builder
@RequiredArgsConstructor
@Getter
public class BranchCreate {

    private final String name;

    private final Long projectId;
}
