package crepe.backend.domain.project.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ProjectInfoList {
    List<ProjectInfo> projects = new ArrayList<>();

    public void addAllProjectInfo(List<ProjectInfo> projects)
    {
        this.projects.addAll(projects);
    }

    public void addProjectInfo(ProjectInfo project)
    {
        this.projects.add(project);
    }

}
