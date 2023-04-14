
package crepe.backend.domain.project.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Getter
@NoArgsConstructor
public class ProjectInfo {
    private String name;
    private UUID uuid;

    @Builder
    public ProjectInfo(String name, UUID uuid) {
        this.name = name;
        this.uuid = uuid;
    }

}