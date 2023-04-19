package crepe.backend.domain.log.controller;

import crepe.backend.domain.log.dto.LogCreateRequest;
import crepe.backend.domain.log.dto.LogCreateRequestForm;
import crepe.backend.global.response.ResultCode;
import crepe.backend.global.response.ResultResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.bytebuddy.asm.Advice;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.Console;
import java.util.List;

@Slf4j
@RequestMapping("/api/v1/logs")
@RestController
@RequiredArgsConstructor
public class LogController {

    @PostMapping
    public ResponseEntity<ResultResponse> createLog(
            @Valid @ModelAttribute LogCreateRequestForm request) {
        // ---
        // 파일 .getOriginalFileName()으로 이름 받아오기
        // layer에 파일 저장 (레이어 만들기)
        // 로그 만들기
        request.getLayer().stream().forEach(log -> {
            System.out.println(log.getFile().getOriginalFilename());
            System.out.println(log.getData().getUserId());
            System.out.println(log.getData().getBranchId());
            System.out.println(log.getData().getMessage());
        });


        return ResponseEntity.ok(ResultResponse.of(ResultCode.CREATE_LOG_SUCCESS, ""));

    }

}
