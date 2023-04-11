/*package crepe.backend.domain.project.repository.repository;

import crepe.backend.domain.project.domain.entity.Project;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public class ProjectRepository {

    @PersistenceContext
    private EntityManager em;

    public void save(Project project)
    {
        em.persist(project);
    }

    public List<Project> findProjects(List<Project.ProjectInfoMapping> projects) // 원하는 id의 프로젝트들만 가져오기 위한 함수
    {
        return em.createQuery("select p from Project p where p.id = :projects", Project.class)
                .setParameter("projects", projects)
                .getResultList();
    }


}*/
