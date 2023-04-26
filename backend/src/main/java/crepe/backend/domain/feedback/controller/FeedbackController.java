package crepe.backend.domain.feedback.controller;

import crepe.backend.domain.feedback.dto.FeedbackCreate;
import crepe.backend.domain.feedback.dto.FeedbackCreateInfo;
import crepe.backend.domain.feedback.service.FeedbackService;
import crepe.backend.global.response.ResultResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.util.Map;
import java.util.UUID;

import static crepe.backend.global.response.ResultCode.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/feedbacks")
public class FeedbackController {

    private final FeedbackService feedbackService;

    @PostMapping
    public ResponseEntity<ResultResponse> createFeedback(@Valid @RequestBody FeedbackCreate createrequest)
    {
         FeedbackCreateInfo feedbackCreate = feedbackService.createFeedback(createrequest);
        return ResponseEntity.ok(ResultResponse.of(CREATE_FEEDBACK_SUCCESS, feedbackCreate));
    }

/*    @PatchMapping("/{uuid}")
    public ResponseEntity<ResultResponse> updateFeedback(@PathVariable UUID uuid, @RequestBody Map<String,String> request)
    {
        feedbackService.updateFeedbackInfo(uuid, request);
        return ResponseEntity.ok(ResultResponse.of(UPDATE_FEEDBACK_SUCCESS, ""));
    }*/

    @DeleteMapping("/{uuid}")
    public ResponseEntity<ResultResponse> deleteFeedback(@PathVariable UUID uuid) {
        feedbackService.deleteFeedback(uuid);
        return ResponseEntity.ok(ResultResponse.of(DELETE_FEEDBACK_SUCCESS, ""));
    }
}
