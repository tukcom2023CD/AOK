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

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private LocalDateTime createdAt;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private LocalDateTime updatedAt;

    private UUID uuid;

    @Builder
    public ProjectInfo(String name, LocalDateTime createdAt, LocalDateTime updatedAt, UUID uuid) {
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.uuid = uuid;
    }

}
