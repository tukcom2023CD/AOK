package crepe.backend.domain.userproject.domain.repository;

import crepe.backend.domain.user.domain.entity.User;
import crepe.backend.domain.userproject.domain.entity.UserProject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface UserProjectRepository extends JpaRepository<UserProject, Long> {

    List<UserProject> findAllByUserAndIsActiveTrue(User user);
}
