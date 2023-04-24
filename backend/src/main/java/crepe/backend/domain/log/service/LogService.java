package crepe.backend.domain.log.service;

import crepe.backend.domain.log.domain.entity.Resource;
import crepe.backend.domain.log.domain.repository.ResourceRepository;
import crepe.backend.domain.log.dto.LogCreateRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class LogService {
    private final ResourceRepository resourceRepository;
    private final LogService logService;

    public void createLog(LogCreateRequest logCreateRequest) {
        List<Resource> resources = new ArrayList<>();
        
    }

}
