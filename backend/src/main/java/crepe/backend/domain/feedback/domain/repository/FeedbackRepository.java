package crepe.backend.domain.feedback.domain.repository;

import crepe.backend.domain.feedback.domain.entity.Feedback;
import crepe.backend.domain.log.domain.entity.Log;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;
import java.util.List;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
    List<Feedback> findAllByLogAndIsActiveTrueOrderByCreatedAtDesc(Log log);
    Optional<Feedback> findFeedbackByUuidAndIsActiveTrue(UUID uuid);

}
