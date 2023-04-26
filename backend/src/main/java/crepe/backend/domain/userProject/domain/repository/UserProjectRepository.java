package crepe.backend.domain.userProject.domain.repository;

import crepe.backend.domain.project.domain.entity.Project;
import crepe.backend.domain.user.domain.entity.User;
import crepe.backend.domain.userProject.domain.entity.UserProject;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.awt.print.Pageable;
import java.util.List;


@Repository
public interface UserProjectRepository extends JpaRepository<UserProject, Long> {

    Page<UserProject> findAllByUserAndIsActiveTrue(User user, PageRequest pageRequest);

    List<UserProject> findAllByProjectAndIsActiveTrue(Project projectByUuid);

}