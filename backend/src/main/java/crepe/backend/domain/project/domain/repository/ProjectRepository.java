package crepe.backend.domain.project.domain.repository;

import crepe.backend.domain.project.domain.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
    Optional<Project> findProjectByUuidAndIsActiveTrue(UUID uuid);

    Optional<Project> findProjectByIdAndIsActiveTrue(Long projectId);
}
