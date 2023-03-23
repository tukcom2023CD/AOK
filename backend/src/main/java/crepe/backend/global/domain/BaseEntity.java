package crepe.backend.global.domain;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public class BaseEntity {
    @CreatedDate protected LocalDateTime createdAt;
    @LastModifiedDate private LocalDateTime updatedAt;

    @Getter
    @Column(name = "is_active", nullable = false)
    protected boolean isActive;

    public void activeOff() {
        this.isActive = false;
    }
}
