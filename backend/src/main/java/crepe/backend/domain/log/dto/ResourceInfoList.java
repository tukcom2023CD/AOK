package crepe.backend.domain.log.dto;

import crepe.backend.domain.project.dto.ProjectInfo;
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
public class ResourceInfoList {

    List<ResourceInfo> resourceInfos = new ArrayList<>();
    public void addAllResourceInfo(List<ResourceInfo> resourceInfos)
    {
        this.resourceInfos.addAll(resourceInfos);
    }
    public void addResourceInfo(ResourceInfo resourceInfo) {this.resourceInfos.add(resourceInfo); }

}
