package crepe.backend.domain.feedback.service;

import crepe.backend.domain.branch.domain.entity.Branch;
import crepe.backend.domain.branch.service.BranchService;
import crepe.backend.domain.feedback.domain.entity.Feedback;
import crepe.backend.domain.feedback.domain.repository.FeedbackRepository;
import crepe.backend.domain.feedback.dto.FeedbackCreate;
import crepe.backend.domain.feedback.dto.FeedbackCreateInfo;
import crepe.backend.domain.feedback.exception.NotFoundFeedbackEntityException;
import crepe.backend.domain.log.domain.entity.Log;
import crepe.backend.domain.log.domain.repository.LogRepository;
import crepe.backend.domain.log.exception.NotFoundLogEntityException;
import crepe.backend.domain.user.domain.entity.User;
import crepe.backend.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;


@Service
@RequiredArgsConstructor
public class FeedbackService {

    private final FeedbackRepository feedbackRepository;
    private final UserService userService;
    private final LogRepository logRepository;

    public FeedbackCreateInfo createFeedback(FeedbackCreate createrequest)
    {
        User findUser = userService.findUserById(createrequest.getUserId());
        Log findLog = logRepository.findLogByIdAndIsActiveTrue(createrequest.getLogId()).orElseThrow(NotFoundLogEntityException :: new);
        Feedback feedback = feedbackRepository.save(getFeedback(createrequest, findUser, findLog));

        return mapFeedbackToFeedbackCreateInfo(feedback);
    }

    public void deleteFeedback(UUID uuid)
    {
        Feedback feedback = feedbackRepository.findFeedbackByUuidAndIsActiveTrue(uuid).orElseThrow(NotFoundFeedbackEntityException::new);
        feedbackRepository.delete(feedback);
    }

    private Feedback getFeedback(FeedbackCreate createrequest, User user, Log log)
    {
        return Feedback.builder()
                .user(user)
                .log(log)
                .message(createrequest.getMessage())
                .build();
    }

    private FeedbackCreateInfo mapFeedbackToFeedbackCreateInfo(Feedback feedback)
    {
        return FeedbackCreateInfo.builder()
                .uuid(feedback.getUuid())
                .build();
    }
}
