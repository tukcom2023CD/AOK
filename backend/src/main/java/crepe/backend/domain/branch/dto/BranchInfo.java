package crepe.backend.domain.branch.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Getter
@NoArgsConstructor
public class BranchInfo {
    private Long id;
    private String name;


    @Builder
    public BranchInfo(Long id, String name) {
        this.id = id;
        this.name = name;
    }
}
