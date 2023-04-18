package crepe.backend.domain.log.controller;

import crepe.backend.global.response.ResultResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/v1/logs")
@RestController
@RequiredArgsConstructor
public class LogController {

    @PostMapping
    public ResponseEntity<ResultResponse> createLog() {

    }

}
