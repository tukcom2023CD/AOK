package crepe.backend.domain.log.domain.repository;


import crepe.backend.domain.log.domain.entity.Log;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import crepe.backend.domain.branch.domain.entity.Branch;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface LogRepository extends JpaRepository<Log, Long> {


    Optional<Log> findLogByUuidAndIsActiveTrue(UUID uuid);
    List<Log> findAllLogByBranchAndIsActiveTrue(Branch branchById);
    Optional<Log> findLogByIdAndIsActiveTrue(Long id);

    List<Log> findAllByBranchAndIsActiveTrueOrderByCreatedAtDesc(Branch branch);
}
