package software.bytepushers.bpweb.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.apache.commons.lang3.StringUtils;
import org.h2.util.json.JSONTarget;
import org.springframework.http.HttpStatus;

import java.util.List;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

/**
 * The API response model.
 */
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, property = "type")
@JsonSubTypes({@JsonSubTypes.Type(value = ApiError.class, name = "API Error"), @JsonSubTypes.Type(value = ApiValidationError.class, name = "Api Validation Error")})
@Getter
@EqualsAndHashCode
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
