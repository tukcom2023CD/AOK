package crepe.backend.domain.log.dto;

import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;


@Builder
@Getter @Setter
@AllArgsConstructor
public class LogCreateInfo {

    private String userId;
    private String branchId;
    private String message;
}
