
package crepe.backend.domain.project.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

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
