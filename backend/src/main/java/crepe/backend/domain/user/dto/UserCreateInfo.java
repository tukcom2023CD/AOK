package crepe.backend.domain.user.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Getter
@NoArgsConstructor
public class UserCreateInfo {

    private UUID uuid;

    @Builder
    public UserCreateInfo(UUID uuid)
    {
        this.uuid = uuid;
    }
}