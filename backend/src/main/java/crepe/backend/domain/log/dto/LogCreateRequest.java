package crepe.backend.domain.log.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


@Builder
@Getter
@AllArgsConstructor
public class LogCreateRequest {

    //private List<MultipartFile> files;
    private MultipartFile file;
    private LogCreateInfo data;

}
