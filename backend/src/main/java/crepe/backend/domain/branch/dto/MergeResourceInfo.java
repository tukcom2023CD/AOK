package crepe.backend.domain.branch.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MergeResourceInfo {

    private String name;
    private String link;
    private int sequence;
    private boolean isDuplicated;

    private boolean isNew;

    @Builder
    public MergeResourceInfo(String name, String link, int sequence, boolean isDuplicated, boolean isNew) {
        this.name = name;
        this.link = link;
        this.sequence = sequence;
        this.isDuplicated = isDuplicated;
        this.isNew = isNew; //메인브랜치에 추가된 파일인가
    }
}
