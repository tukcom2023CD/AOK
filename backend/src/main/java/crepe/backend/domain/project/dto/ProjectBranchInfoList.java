package crepe.backend.domain.project.dto;

import crepe.backend.domain.branch.dto.BranchInfo;
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
public class ProjectBranchInfoList {
    private List<ProjectBranchInfo> projectBranchInfos = new ArrayList<>();

    public void addAllProjectBranchInfo(List<ProjectBranchInfo> projectBranchInfos) {
        this.projectBranchInfos.addAll(projectBranchInfos);
    }

    public void addProjectBranchInfo(ProjectBranchInfo projectBranchInfo) {
        this.projectBranchInfos.add(projectBranchInfo);
    }
}
