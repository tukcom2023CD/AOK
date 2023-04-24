package crepe.backend.domain.branch.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.UUID;

@Getter
@RequiredArgsConstructor
public class BranchCreateInfo {

    private UUID uuid;

    @Builder
    public BranchCreateInfo(UUID uuid)
    {
        this.uuid = uuid;
    }

}