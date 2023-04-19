package crepe.backend.domain.branch.dto;

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
public class BranchInfoList {
    private List<BranchInfo> branchInfos = new ArrayList<>();

    public void addAllBranchInfo(List<BranchInfo> branchInfos) {
        this.branchInfos.addAll(branchInfos);
    }

    public void addBranchInfo(BranchInfo branchInfo) {
        this.branchInfos.add(branchInfo);
    }
}
