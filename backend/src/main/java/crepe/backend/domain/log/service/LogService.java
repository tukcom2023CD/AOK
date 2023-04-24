package crepe.backend.domain.log.service;

import crepe.backend.domain.log.domain.repository.ResourceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LogService {
    private final ResourceRepository resourceRepository;
    private final LogService logService;

}
