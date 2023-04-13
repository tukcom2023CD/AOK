package crepe.backend.domain.user.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.UUID;

@Builder
@Getter
@RequiredArgsConstructor
public class UserCreate {

    private final String email;

    private final String passwd;

    private final String photo;

    private final String nickname;

}
