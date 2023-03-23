package crepe.backend.domain.user.domain.entity;

import crepe.backend.global.domain.BaseEntity;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
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

    @Builder
    public User(String email, String password, String nickname, String photo) {
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.photo = photo;
        super.isActive = true;
    }

}
