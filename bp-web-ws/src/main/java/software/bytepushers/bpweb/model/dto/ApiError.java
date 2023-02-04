package software.bytepushers.bpweb.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.apache.commons.lang3.StringUtils;

/**
 * The API response model.
 */
@Getter
@NoArgsConstructor
public class ApiError {

    @JsonIgnore
    private String type;
    private String code;
    private String message;
    private String debugMessage = StringUtils.EMPTY;

    public ApiError(String code, String type, String message) {
        this.code = code;
        this.type = type;
        this.message = message;
    }

    public ApiError(String code, String type, String message, String debugMessage) {
        this(code, type, message);
        this.debugMessage = debugMessage;
    }

}
