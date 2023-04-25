package crepe.backend.domain.log.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Getter
@NoArgsConstructor
public class LogUuidInfo {
    private UUID uuid;

    @Builder
    public LogUuidInfo(UUID uuid) {
        this.uuid = uuid;
    }
}
