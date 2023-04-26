package crepe.backend.domain.layer.domain.entity;

import crepe.backend.domain.log.domain.entity.Log;
import crepe.backend.global.domain.BaseEntity;
import lombok.*;

import javax.persistence.*;
import java.util.UUID;

import static javax.persistence.FetchType.LAZY;

@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "layer")
public class Layer extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "log_id", nullable = false)
    private Log log;
    @Column(name = "uuid", columnDefinition = "BINARY(16)", nullable = false, unique = true)
    private UUID uuid;

    @Column(name = "name", length = 200, nullable = false)
    private String name;

    @Column(name = "link", length = 200, nullable = false)
    private String link;

    @Builder
    public Layer(Log log, String name, String link) {
        this.log = log;
        this.name = name;
        this.link = link;
        super.isActive = true;
        this.uuid = UUID.randomUUID();
    }
}