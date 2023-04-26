package crepe.backend.domain.log.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


@Builder
@Getter @Setter
@AllArgsConstructor
public class LogCreateRequest {

    private List<MultipartFile> files;
    private Long userId;
    private Long branchId;
    private String message;

}
