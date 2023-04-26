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
public class LogFeedbackInfoList {

    List<LogFeedbackInfo> logFeedbackInfos = new ArrayList<>();

    public void addAllLogFeedbackInfo(List<LogFeedbackInfo> logFeedbackInfos) {
        this.logFeedbackInfos.addAll(logFeedbackInfos);
    }

    public void addLogFeedbackInfo(LogFeedbackInfo logFeedbackInfo) {
        this.logFeedbackInfos.add(logFeedbackInfo);
    }

}
