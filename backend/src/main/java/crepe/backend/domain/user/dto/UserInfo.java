package crepe.backend.domain.user.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Getter
@NoArgsConstructor
public class UserInfo {

    private UUID uuid;

    private String email;

    private String nickname;

    private String photo;

    @Builder
    public UserInfo(UUID uuid, String email, String nickname, String photo)
    {
        this.uuid = uuid;
        this.email = email;
        this.nickname = nickname;
        this.photo = photo;
    }
}
