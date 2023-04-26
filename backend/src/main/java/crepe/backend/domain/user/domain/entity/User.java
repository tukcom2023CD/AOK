package crepe.backend.domain.user.domain.entity;

import crepe.backend.domain.feedback.domain.entity.Feedback;
import crepe.backend.domain.log.domain.entity.Log;
import crepe.backend.domain.log.domain.entity.Resource;
import crepe.backend.domain.project.domain.entity.UserProject;
import crepe.backend.global.domain.BaseEntity;
import lombok.*;
import org.hibernate.annotations.SQLDelete;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@SQLDelete(sql = "UPDATE user SET is_active = false WHERE id=?")
@Table(name = "user")
public class User extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "uuid", columnDefinition = "BINARY(16)", nullable = false, unique = true)
    private UUID uuid;

    @Column(name = "email", length = 200, nullable = false, unique = true)
    private String email;

    @Column(name = "password", length = 200, nullable = false)
    private String password;

    @Column(name = "nickname", length = 200, nullable = false, unique = true)
    private String nickname;

    @Column(name = "photo", length = 200)
    private String photo;

    @OneToMany(mappedBy = "user")
    private List<UserProject> userProjects = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Log> logs = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Feedback> feedbacks = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Resource> resources = new ArrayList<>();

    @Builder
    public User(String email, String password, String nickname, String photo) {
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.photo = photo;
        super.isActive = true;
        this.uuid = UUID.randomUUID();
    }

    public void updateUser(String email, String password, String nickname, String photo)
    {
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.photo = photo;
    }
}
