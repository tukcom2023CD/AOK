package crepe.backend.domain.log.domain.repository;

import crepe.backend.domain.log.domain.entity.Layer;
import crepe.backend.domain.log.domain.entity.Log;
import crepe.backend.domain.log.domain.entity.Resource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LayerRepository extends JpaRepository<Layer, Long> {
    List<Layer> findAllByLogAndIsActiveTrueOrderBySequence(Log log);

    Layer findByResourceAndIsActiveTrue(Resource resource);
}
