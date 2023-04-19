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
        // layer에 파일 저장 (레이어 만들기)
        // 로그 만들기
        System.out.println(request.getFiles().get(0).getOriginalFilename());

        System.out.println(request.getLog().getMessage());
        System.out.println(request.getLog().getUserId());
        System.out.println(request.getLog().getBranchId());

        return ResponseEntity.ok(ResultResponse.of(ResultCode.CREATE_LOG_SUCCESS, ""));

    }

}
