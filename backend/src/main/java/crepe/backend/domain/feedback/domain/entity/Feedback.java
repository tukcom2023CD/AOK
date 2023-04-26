package crepe.backend.domain.feedback.domain.entity;

import crepe.backend.domain.branch.domain.entity.Branch;
import crepe.backend.domain.log.domain.entity.Log;
import crepe.backend.domain.user.domain.entity.User;
import crepe.backend.global.domain.BaseEntity;
import lombok.*;
import org.hibernate.annotations.SQLDelete;

import javax.persistence.*;
import java.util.UUID;

import static javax.persistence.FetchType.LAZY;

@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@SQLDelete(sql = "UPDATE feedback SET is_active = false WHERE id=?")
@Table(name = "feedback")
public class Feedback extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "log_id", nullable = false)
    private Log log;

    @Column(name = "uuid", columnDefinition = "BINARY(16)", nullable = false, unique = true)
    private UUID uuid;

    @Column(name = "message", length = 200, nullable = false)
    private String message;

    @Builder
    public Feedback(User user, Log log, String message) {
        this.user = user;
        this.log = log;
        this.message = message;
        super.isActive = true;
        this.uuid = UUID.randomUUID();
    }
}
