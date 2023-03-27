package crepe.backend.domain.branch.domain.entity;

import crepe.backend.domain.project.domain.entity.Project;
import crepe.backend.global.domain.BaseEntity;
import lombok.*;

import javax.persistence.*;
import java.util.UUID;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
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


    @Builder
    public Branch(Project project, String name) {
        this.project = project;
        this.name = name;
        this.isActive = true;
    }


}
