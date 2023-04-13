package crepe.backend.domain.user.repository;

import crepe.backend.domain.user.domain.entity.User;
import crepe.backend.domain.project.domain.entity.Project;
/*import crepe.backend.domain.user.dto.UserProjectRequest;*/
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findUserByUuid(UUID uuid);
}
