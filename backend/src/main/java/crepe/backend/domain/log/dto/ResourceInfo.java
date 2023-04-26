package crepe.backend.domain.log.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Getter
@NoArgsConstructor
public class ResourceInfo {

    private String name;
    private String link;
    private UUID uuid;

    @Builder
    public ResourceInfo(String fileName, String fileLink, UUID fileUuid) {
        this.name = fileName;
        this.link = fileLink;
        this.uuid = fileUuid;
    }
}
