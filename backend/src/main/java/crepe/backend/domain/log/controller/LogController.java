package crepe.backend.domain.log.controller;

import crepe.backend.domain.log.domain.entity.Log;
import crepe.backend.domain.log.domain.entity.Resource;
import crepe.backend.domain.log.domain.repository.ResourceRepository;
import crepe.backend.domain.log.dto.LogCreateRequest;
import crepe.backend.domain.log.service.LogService;
import crepe.backend.domain.log.service.ResourceService;
import crepe.backend.global.exception.BusinessException;
import crepe.backend.global.response.ErrorCode;
import crepe.backend.global.response.ResultCode;
import crepe.backend.global.response.ResultResponse;
import crepe.backend.global.service.S3Service;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Slf4j
@RequestMapping("/api/v1/logs")
@RestController
@RequiredArgsConstructor
public class LogController {

    private final LogService logService;
    private final ResourceService resourceService;
    private final S3Service s3Service;
    @PostMapping
    public ResponseEntity<ResultResponse> createLog(
            @Valid @ModelAttribute LogCreateRequest request) {
        // ---
        // 파일 .getOriginalFileName()으로 이름 받아오기
        // 2. 리소스 파일 저장 (S3, 리소스)
        // 3. 로그 만들기
        // 4. 레이어 생성
        if (request.getFiles() == null) {
            throw new BusinessException(ErrorCode.EMPTY_FILES);
        }
        List<String> fileLinks = s3Service.uploadFile(request.getFiles());
        List<Resource> resources = resourceService.createResourceList(request, fileLinks);
        Log log = logService.createLog(request);


        System.out.println("Files: " + fileLinks);




        return ResponseEntity.ok(ResultResponse.of(ResultCode.CREATE_LOG_SUCCESS, ""));

    }

}
