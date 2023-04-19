package crepe.backend.domain.branch.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Getter
@NoArgsConstructor
public class BranchInfo {
    private String name;
    private UUID uuid;

    @Builder
    public BranchInfo(String name, UUID uuid) {
        this.name = name;
        this.uuid = uuid;
    }
}
