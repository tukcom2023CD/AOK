package crepe.backend.domain.user.repository.repository;

import crepe.backend.domain.project.domain.entity.Project;
import crepe.backend.domain.user.domain.entity.User;
import org.springframework.stereotype.Repository;
import crepe.backend.domain.user.domain.entity.UserProject;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public class UserProjectRepository {

    @PersistenceContext
    EntityManager em;

    public List<Project.ProjectInfoMapping> findByUserId(Long user_id) // 해당 유저가 참여하고 있는 프로젝트의 아이디를 가져오기 위한 함수
    {
        return em.createQuery("select p from UserProject p where p.user = :user", Project.ProjectInfoMapping.class)
                .setParameter("user", user_id)
                .getResultList();
    }

    public List<User.UserInfoMapping> findByProjectId(Long project_id) // 해당 프로젝트에 속해있는 유저의 id를 알기 위한 함수
    {
        return em.createQuery("select u from UserProject u where u.project = :project", User.UserInfoMapping.class)
                .setParameter("project", project_id)
                .getResultList();
    }
}
