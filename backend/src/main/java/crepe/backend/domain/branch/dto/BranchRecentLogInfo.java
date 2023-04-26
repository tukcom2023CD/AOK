package crepe.backend.domain.branch.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Getter
@NoArgsConstructor
public class BranchRecentLogInfo {

    private UUID uuid;

    @Builder
    public BranchRecentLogInfo(UUID uuid) {
        this.uuid = uuid;
    }
}
