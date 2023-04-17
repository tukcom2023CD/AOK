package crepe.backend.domain.project.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Builder
@Getter
@RequiredArgsConstructor
public class ProjectCreateRequest {

    @NotBlank(message = "프로젝트 이름을 입력해주세요.")
    private final String name;

    @NotNull(message = "유저 아이디를 입력해주세요.")
    private final Long userId;

}
