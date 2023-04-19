package crepe.backend.domain.log.domain.entity;

import crepe.backend.domain.project.domain.entity.Project;
import crepe.backend.global.domain.BaseEntity;
import lombok.*;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name="log_layer")
public class LogLayer extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "log_id", nullable = false)
    private Log log;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "layer_id", nullable = false)
    private Layer layer;

    @Builder
    public LogLayer(Log log, Layer layer) {
        this.log = log;
        this.layer = layer;
        super.isActive = true;
    }
}
