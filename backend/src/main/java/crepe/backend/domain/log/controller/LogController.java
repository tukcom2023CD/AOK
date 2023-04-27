package crepe.backend.domain.log.controller;

import crepe.backend.domain.log.domain.entity.Log;
import crepe.backend.domain.log.domain.entity.Resource;
import crepe.backend.domain.log.dto.LogCreateRequest;
import crepe.backend.domain.log.dto.LogUuidInfo;
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
import java.util.UUID;

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

        if (request.getFiles() == null) {
            throw new BusinessException(ErrorCode.EMPTY_FILES);
        }
        List<String> fileLinks = s3Service.uploadFile(request.getFiles());
        List<Resource> resources = resourceService.createResourceList(request, fileLinks);
        Log log = logService.createLog(request);
        LogUuidInfo logUuidInfo = logService.createLogUuidInfo(log);
        logService.createLayer(log, resources);

        return ResponseEntity.ok(ResultResponse.of(ResultCode.CREATE_LOG_SUCCESS, logUuidInfo));
    }

    @GetMapping("/{uuid}")
    public ResponseEntity<ResultResponse> findLogByUuid(@PathVariable UUID uuid) {
        return ResponseEntity.ok(ResultResponse.of(ResultCode.READ_ONE_LOG_SUCCESS, logService.findLogInfoByUuid(uuid)));
    }

    @DeleteMapping("/{uuid}")
    public ResponseEntity<ResultResponse> deleteUser(@PathVariable UUID uuid) {
        logService.deleteLog(uuid);
        return ResponseEntity.ok(ResultResponse.of(ResultCode.DELETE_LOG_SUCCESS, ""));
    }
}
