package crepe.backend.domain.branch.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MergeResourceInfo {

    private String name;
    private String link;
    private boolean isDuplicated;

    private boolean isNew;

    @Builder
    public MergeResourceInfo(String name, String link, boolean isDuplicated, boolean isNew) {
        this.name = name;
        this.link = link;
        this.isDuplicated = isDuplicated;
        this.isNew = isNew; //새로 추가된-변경된 파일인가
    }
}
