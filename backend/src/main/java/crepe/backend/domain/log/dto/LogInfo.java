package crepe.backend.domain.log.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Getter
@NoArgsConstructor
public class LogInfo {

    private  UUID uuid;

    private String message;

    @Builder
    public LogInfo(UUID uuid, String message)
    {
        this.uuid = uuid;
        this.message = message;
    }
}
