package crepe.backend.domain.log.domain.repository;

import crepe.backend.domain.log.domain.entity.Resource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ResourceRepository extends JpaRepository<Resource, Long> {

    Optional<Resource> findResourceByIdAndIsActiveTrue(Long id);
}
