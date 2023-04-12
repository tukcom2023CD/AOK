package crepe.backend.domain.log.domain.entity;

import crepe.backend.domain.branch.domain.entity.Branch;
import crepe.backend.domain.feedback.domain.entity.Feedback;
import crepe.backend.domain.layer.domain.entity.Layer;
import crepe.backend.domain.user.domain.entity.User;
import crepe.backend.global.domain.BaseEntity;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import static javax.persistence.FetchType.LAZY;

@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "log")
public class Log extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "branch_id", nullable = false)
    private Branch branch;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToMany(mappedBy = "log")
    private List<Layer> layers = new ArrayList<>();

    @Column(name = "uuid", columnDefinition = "BINARY(16)", nullable = false, unique = true)
    private UUID uuid;

    @Column(name = "content", length = 200, nullable = false)
    private String content;

    @OneToMany(mappedBy = "log")
    private List<Feedback> feedbacks = new ArrayList<>();

    @Builder
    public Log(Branch branch, User user, String content) {
        this.branch = branch;
        this.user = user;
        this.content = content;
        super.isActive = true;
        this.uuid = UUID.randomUUID();
    }
}
