package crepe.backend.domain.log.service;

import crepe.backend.domain.log.domain.entity.Resource;
import crepe.backend.domain.log.domain.repository.ResourceRepository;
import crepe.backend.domain.log.dto.LogCreateRequest;
import crepe.backend.domain.user.domain.entity.User;
import crepe.backend.domain.user.domain.repository.UserRepository;
import crepe.backend.domain.user.exception.NotFoundUserEntityException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ResourceService {
    private final ResourceRepository resourceRepository;
    private final UserRepository userRepository;

    // 파일 업로드 함수 구현
    public List<Resource> createResourceList(LogCreateRequest request, List<String> fileLinks) {
        List<Resource> resources = new ArrayList<>();
        List<MultipartFile> files = request.getFiles();
        User user = getUserById(request.getUserId());
        int index = 0;
        for(MultipartFile file: files){
            resources.add(createResource(user, file.getOriginalFilename(), fileLinks.get(index++)));
        }
        return resources;
    }
    public Resource createResource(User user, String fileName, String fileLink) {
        Resource resource = Resource.builder()
                .user(user)
                .name(fileName)
                .link(fileLink)
                .build();
        resourceRepository.save(resource);
        return resource;
    }

    private User getUserById(Long userId) {
        return userRepository.findUserByIdAndIsActiveTrue(userId).orElseThrow(NotFoundUserEntityException::new);
    }

}
