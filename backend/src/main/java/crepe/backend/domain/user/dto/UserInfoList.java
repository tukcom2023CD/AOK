package crepe.backend.domain.user.dto;

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
public class UserInfoList {

    private List<UserInfo> userInfos = new ArrayList<>();

    public void addAllUserInfo(List<UserInfo> userInfos) {
        this.userInfos.addAll(userInfos);
    }

    public void addUserInfo(UserInfo userInfo) {
        this.userInfos.add(userInfo);
    }
}
