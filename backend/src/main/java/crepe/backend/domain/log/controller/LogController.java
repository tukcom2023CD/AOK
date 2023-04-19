package crepe.backend.domain.log.controller;

import crepe.backend.domain.log.dto.LogCreateRequest;
import crepe.backend.global.response.ResultCode;
import crepe.backend.global.response.ResultResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Slf4j
@RequestMapping("/api/v1/logs")
@RestController
@RequiredArgsConstructor
public class LogController {

    @PostMapping
    public ResponseEntity<ResultResponse> createLog(
            @Valid @ModelAttribute LogCreateRequest request) {
        // ---
        // 파일 .getOriginalFileName()으로 이름 받아오기
        // 2. 리소스 파일 저장 (S3, 리소스)
        // 3. 로그 만들기
        // 4. 레이어 생성
        System.out.println(request.getFiles().get(0).getOriginalFilename());
        System.out.println(request.getFiles().get(1).getOriginalFilename());
        System.out.println(request.getMessage());
        System.out.println(request.getUserId());
        System.out.println(request.getBranchId());

        return ResponseEntity.ok(ResultResponse.of(ResultCode.CREATE_LOG_SUCCESS, ""));

    }

}
