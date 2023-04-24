package crepe.backend.domain.log.domain.repository;

import crepe.backend.domain.log.domain.entity.Layer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LayerRepository extends JpaRepository<Layer, Long> {
}
