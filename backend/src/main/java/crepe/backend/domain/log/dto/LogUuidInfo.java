package crepe.backend.domain.log.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@NoArgsConstructor
public class LogUuidInfo {
    private UUID uuid;
    private LocalDateTime createdAt;

    @Builder
    public LogUuidInfo(UUID uuid, LocalDateTime createdAt) {
        this.uuid = uuid;
        this.createdAt = createdAt;
    }
}
