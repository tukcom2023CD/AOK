package crepe.backend.domain.log.domain.repository;

import crepe.backend.domain.branch.domain.entity.Branch;
import crepe.backend.domain.log.domain.entity.Log;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface LogRepository extends JpaRepository<Log, Long> {

    Page<Log> findAllLogByBranchAndIsActiveTrue(Branch branchById, PageRequest pageRequest);

    Optional<Log> findLogByIdAndIsActiveTrue(Long id);

}
