package crepe.backend.domain.log.service;

import crepe.backend.domain.log.domain.repository.ResourceRepository;
import crepe.backend.domain.user.domain.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ResourceService {
    private final ResourceRepository resourceRepository;

    // 파일 업로드 함수 구현
}
