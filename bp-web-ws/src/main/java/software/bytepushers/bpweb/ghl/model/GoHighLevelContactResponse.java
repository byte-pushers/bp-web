package software.bytepushers.bpweb.ghl.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

@Setter
@Getter
@NoArgsConstructor
// @JsonInclude(NON_NULL)
public class GoHighLevelContactResponse {
    private GoHighLevelContact contact;
    private String traceId;
}
