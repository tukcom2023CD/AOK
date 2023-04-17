package crepe.backend.domain.userProject.domain.repository;

import crepe.backend.domain.project.domain.entity.Project;
import crepe.backend.domain.user.domain.entity.User;
import crepe.backend.domain.userProject.domain.entity.UserProject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface UserProjectRepository extends JpaRepository<UserProject, Long> {

    List<UserProject> findAllByUserAndIsActiveTrue(User user);

    List<UserProject> findAllByProjectAndIsActiveTrue(Project projectByUuid);

}