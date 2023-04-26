package crepe.backend.domain.feedback.domain.repository;

import crepe.backend.domain.feedback.domain.entity.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

    Optional<Feedback> findFeedbackByUuidAndIsActiveTrue(UUID uuid);
}
