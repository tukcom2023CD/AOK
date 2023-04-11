package crepe.backend.domain.user.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class UserInfo {

    private Long id;

    private String email;

    private String nickname;

    private String photo;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private LocalDateTime createdAt;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private LocalDateTime updatedAt;

    @Builder
    public UserInfo(Long id, String email, String nickname, String photo, LocalDateTime createdAt, LocalDateTime updatedAt)
    {
        this.id = id;
        this.email = email;
        this.nickname = nickname;
        this.photo = photo;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
