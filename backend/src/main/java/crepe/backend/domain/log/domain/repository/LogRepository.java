package crepe.backend.domain.log.domain.repository;

import crepe.backend.domain.log.domain.entity.Log;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface LogRepository extends JpaRepository<Log, Long> {


    Optional<Log> findLogByUuidAndIsActiveTrue(UUID uuid);
}
