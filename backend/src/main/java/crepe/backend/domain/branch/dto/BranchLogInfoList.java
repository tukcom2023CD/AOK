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
public class BranchLogInfoList {

    List<BranchLogInfo> logs = new ArrayList<>();

    public void addAllBranchLogInfo(List<BranchLogInfo> branchLogInfoList)
    {
        this.logs.addAll(branchLogInfoList);
    }

    public void addBranchLogInfo(BranchLogInfo branchLogInfo)
    {
        this.logs.add(branchLogInfo);
    }
}
