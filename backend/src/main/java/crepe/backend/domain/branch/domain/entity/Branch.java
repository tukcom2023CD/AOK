package crepe.backend.domain.branch.domain.entity;

import crepe.backend.domain.feedback.domain.entity.Feedback;
import crepe.backend.domain.log.domain.entity.Log;
import crepe.backend.domain.project.domain.entity.Project;
import crepe.backend.global.domain.BaseEntity;
import lombok.*;
import org.hibernate.annotations.SQLDelete;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@SQLDelete(sql = "UPDATE branch SET is_active = false WHERE id=?")
@Table(name = "branch")
public class Branch extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "project_id", nullable = false)
    private Project project;

    @Column(name = "uuid", columnDefinition = "BINARY(16)", nullable = false, unique = true)
    private UUID uuid;

    @Column(name = "name", length = 200, nullable = false)
    private String name;

    @OneToMany(mappedBy = "branch")
    private List<Log> logs = new ArrayList<>();

    @Builder
    public Branch(Project project, String name) {
        this.project = project;
        this.name = name;
        super.isActive = true;
        this.uuid = UUID.randomUUID();
    }

    public void updateBranch(String name)
    {
        this.name = name;
    }


}
