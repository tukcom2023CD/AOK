package crepe.backend.domain.log.dto;

import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@AllArgsConstructor
public class LogCreateInfo {

    private Long userId;
    private Long branchId;
    private String message;

}
