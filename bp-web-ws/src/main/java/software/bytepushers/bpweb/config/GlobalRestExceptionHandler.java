package software.bytepushers.bpweb.config;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import software.bytepushers.bpweb.exceptions.MalformedRequestException;
import software.bytepushers.bpweb.model.dto.ApiResponse;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

/**
 * Application global rest exception handler.
 */
@RestControllerAdvice
public class GlobalRestExceptionHandler {


    private static final String INVALID_REQUEST = "Invalid Request";

    @ResponseStatus(BAD_REQUEST)
    @ExceptionHandler(MalformedRequestException.class)
    public ResponseEntity<Object> handleMalformedRequestExceptions(MalformedRequestException ex) {
        //ApiResponse apiError = new ApiResponse(ex.getMessages(), ex.getLocalizedMessage(), BAD_REQUEST);
        return new ResponseEntity<>(ex.getApiResponse1(), BAD_REQUEST);
    }

    @ResponseStatus(BAD_REQUEST)
    @ExceptionHandler({MethodArgumentTypeMismatchException.class})
    public ResponseEntity<Object> handleArgumentNotValidExceptions(MethodArgumentTypeMismatchException ex) {
        ApiResponse apiError = new ApiResponse(List.of("Invalid argument value: " + ex.getName()), INVALID_REQUEST, BAD_REQUEST);
        return new ResponseEntity<>(apiError, apiError.getStatus());
    }

    @ResponseStatus(BAD_REQUEST)
    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<Object> handleConstraintValidationExceptions(ConstraintViolationException ex) {
        List<String> errors = ex.getConstraintViolations()
                .stream()
                .map(ConstraintViolation::getMessage)
                .collect(Collectors.toList());
        ApiResponse error = new ApiResponse(errors, INVALID_REQUEST, BAD_REQUEST);
        return new ResponseEntity<>(error, error.getStatus());
    }
}
