package crepe.backend.domain.branch.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
public class MergeResourceInfoList {
    List<MergeResourceInfo> mergeResourceInfos = new ArrayList<>();

    public void addAllMergeResourceInfo(List<MergeResourceInfo> mergeResourceInfos)
    {
        this.mergeResourceInfos.addAll(mergeResourceInfos);
    }

    public void addMergeResourceInfo(MergeResourceInfo mergeResourceInfo)
    {
        this.mergeResourceInfos.add(mergeResourceInfo);
    }
}
