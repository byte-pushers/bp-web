package software.bytepushers.bpweb.model.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

/**
 * The API response model.
 */
@Getter
@NoArgsConstructor
@JsonInclude(NON_NULL)
public class ApiErrorResponse {

    public static final String SUCCESS = "Success";
    public static final String FAILURE = "Failure";

    private String status;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
    private LocalDateTime timestamp=LocalDateTime.now();

    private String data;
    private List<ApiError> errors = new ArrayList<>();

    public ApiErrorResponse(String status, String data, List errors){
        this();
        this.status = status;
        this.data = data;
        this.errors = errors;
    }

    public ApiErrorResponse(String status, String data, ApiError error){
        this();
        this.status = status;
        this.data = data;
        this.errors.add(error);
    }

}
