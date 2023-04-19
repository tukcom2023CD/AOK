package crepe.backend.domain.log.domain.entity;

import crepe.backend.global.domain.BaseEntity;
import lombok.*;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

@Entity
@Table(name = "layer")
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Layer extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "log_id", nullable = false)
    private Log log;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "resource_id", nullable = false)
    private Resource resource;

    @Column(name = "sequence", nullable = false)
    private Long sequence;
    @Builder
    public Layer (Log log, Resource resource, Long sequence) {
        this.log = log;
        this.resource = resource;
        this.sequence = sequence;
        super.isActive = true;
    }

}
