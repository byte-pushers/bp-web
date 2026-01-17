package software.bytepushers.bpweb.ghl.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class GoHighLevelInfo {
    private String locationId;
    private String source;
    private String assignedTo;
}
