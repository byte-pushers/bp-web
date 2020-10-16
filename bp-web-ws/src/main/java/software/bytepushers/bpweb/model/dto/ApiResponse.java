package software.bytepushers.bpweb.model.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpStatus;

import java.util.Collections;
import java.util.List;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

/**
 * The API response model.
 */
@Getter
@Setter
@NoArgsConstructor
@JsonInclude(NON_NULL)
public class ApiResponse {

    private HttpStatus status = HttpStatus.OK;

    private Object data;

    private String errorMessage;

    private List<String> errors;

    public ApiResponse(Object data) {
        this.data = data;
    }

    public ApiResponse(Object data, HttpStatus status) {
        this.data = data;
        this.status = status;
    }

    public ApiResponse(List<String> errors, String errorMessage, HttpStatus status) {
        this.status = status;
        this.errorMessage = errorMessage;
        this.errors = errors;
    }
}
