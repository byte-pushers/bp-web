package software.bytepushers.bpweb.model.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpStatus;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

/**
 * The API response model.
 */
@EqualsAndHashCode
public class ApiResponse1 {

    public static final String SUCCESS = "Success";
    public static final String FAILURE = "Failure";

    private String status;

    @Getter
    @Setter
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
    private LocalDateTime timestamp;

    @Getter
    private List data;
    @Getter
    private List<ApiError> errors = new ArrayList<>();

    public ApiResponse1(){
        timestamp = LocalDateTime.now();
    }

    public ApiResponse1(String status, List data, List errors){
        this();
        this.status = status;
        this.data = data;
        this.errors = errors;
    }

    public ApiResponse1(String status, List data, ApiError error){
        this();
        this.status = status;
        this.data = data;
        this.errors.add(error);
    }

}
