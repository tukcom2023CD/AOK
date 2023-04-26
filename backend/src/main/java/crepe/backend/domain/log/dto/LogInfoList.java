package crepe.backend.domain.log.dto;

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
public class LogInfoList {

    List<LogInfo> logs = new ArrayList<>();

    public void addAllLogInfo(List<LogInfo> logs)
    {
        this.logs.addAll(logs);
    }

    public void addLogInfo(LogInfo log)
    {
        this.logs.add(log);
    }

}
