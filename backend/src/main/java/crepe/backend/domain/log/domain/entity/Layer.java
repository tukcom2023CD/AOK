package crepe.backend.domain.log.domain.entity;

import crepe.backend.global.domain.BaseEntity;
import lombok.*;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
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

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "resource_id", nullable = false)
    private Resource resource;

    @Column(name = "sequence", nullable = false)
    private int sequence;
    @Builder
    public Layer(Log log, Resource resource, int sequence) {

        this.log = log;
        this.resource = resource;
        this.sequence = sequence;
        super.isActive = true;
    }

}
