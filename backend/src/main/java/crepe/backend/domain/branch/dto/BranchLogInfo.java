package crepe.backend.domain.branch.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Getter
@NoArgsConstructor
public class BranchLogInfo {

    private UUID uuid;
    private String message;

    @Builder
    public BranchLogInfo(UUID uuid, String message)
    {
        this.uuid = uuid;
        this.message = message;
    }
}
