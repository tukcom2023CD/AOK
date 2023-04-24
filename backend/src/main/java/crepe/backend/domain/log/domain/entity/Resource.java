package crepe.backend.domain.log.domain.entity;

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
@Table(name = "resource")
public class Resource extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "uuid", columnDefinition = "BINARY(16)", nullable = false, unique = true)
    private UUID uuid;

    @Column(name = "name", length = 200, nullable = false)
    private String name;

    @Column(name = "link", length = 200, nullable = false)
    private String link;

    @OneToMany(mappedBy = "resource")
    private List<Layer> layers = new ArrayList<>();

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Builder
    public Resource(User user, String name, String link) {
        this.user = user;
        this.name = name;
        this.link = link;
        super.isActive = true;
        this.uuid = UUID.randomUUID();
    }
}
