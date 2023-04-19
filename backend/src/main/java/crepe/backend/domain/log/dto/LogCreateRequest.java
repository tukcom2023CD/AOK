package crepe.backend.domain.log.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Builder
@Getter
@RequiredArgsConstructor
public class LogCreateRequest {

    @NotNull(message = "유저 아이디를 입력해주세요.")
    private final Long userId;

    @NotNull(message = "브랜치 아이디를 입력해주세요.")
    private final Long branchId;

    @NotBlank(message = "메세지를 입력해주세요.")
    private final String message;

}
