package crepe.backend.domain.log.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Getter
@NoArgsConstructor
public class ResourceInfo {

    private String Name;
    private String Link;
    private UUID Uuid;

    @Builder
    public ResourceInfo(String fileName, String fileLink, UUID fileUuid) {
        this.Name = fileName;
        this.Link = fileLink;
        this.Uuid = fileUuid;
    }
}
