package crepe.backend.domain.user.domain.entity;

import crepe.backend.domain.project.domain.entity.Project;
import crepe.backend.global.domain.BaseEntity;
import lombok.*;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name="user_project")
public class UserProject extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "project_id", nullable = false)
    private Project project;

    @Column(name = "is_admin", columnDefinition = "boolean default false")
    private boolean is_admin;

    @Builder
    public UserProject(User user, Project project) {
        this.user = user;
        this.project = project;
        this.isActive = true;
    }

    // admin으로 설정하는 코드
}