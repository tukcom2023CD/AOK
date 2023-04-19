package crepe.backend.domain.log.controller;

import crepe.backend.domain.log.dto.LogCreateRequest;
import crepe.backend.global.response.ResultResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.util.List;

@RequestMapping("/api/v1/logs")
@RestController
@RequiredArgsConstructor
public class LogController {

    @PostMapping
    public ResponseEntity<ResultResponse> createLog(
            @Valid @RequestPart("files") List<MultipartFile> files,
            @RequestParam LogCreateRequest request) {
        // ---
        // 파일 .getOriginalFileName()으로 이름 받아오기
        // layer에 파일 저장 (레이어 만들기)
        // 로그 만들기


    }

}
