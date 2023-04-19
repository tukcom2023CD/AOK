package crepe.backend.domain.log.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
@AllArgsConstructor
public class LogCreateRequestForm {
    private List<LogCreateRequest> layer;
}
