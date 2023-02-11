package software.bytepushers.bpweb.config;

import org.apache.commons.lang3.StringUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import software.bytepushers.bpweb.exceptions.MalformedRequestException;
import software.bytepushers.bpweb.model.dto.*;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

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
        //ApiResponse apiError = new ApiResponse(List.of("Invalid argument value: " + ex.getName()), INVALID_REQUEST, BAD_REQUEST);
        ApiErrorResponse apiErrorResponse = new ApiErrorResponse(ApiErrorResponse.FAILURE, StringUtils.EMPTY,
                                                                 new ApiValidationError(ApiConstants.ErrorEnum.METHOD_ARGUMENT_TYPE_MISMATCH_ERROR,
                                                                            Collections.emptyList(), Collections.singletonList(ex.getName())));
        return new ResponseEntity<>(apiErrorResponse, BAD_REQUEST);
    }

    @ResponseStatus(BAD_REQUEST)
    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<Object> handleConstraintValidationExceptions(ConstraintViolationException ex) {
        List<ApiError> apiErrors = new ArrayList<>();
        int i = 1;
        for (ConstraintViolation<?> cv : ex.getConstraintViolations()) {
            ApiError apiError = new ApiConstraintViolationError("api.constraint.violation.e00"+(i++), cv.getMessage(), "Mandatory field missing",
                                                                cv.getPropertyPath() != null ?
                                                                Collections.singletonList(cv.getPropertyPath().toString()) : Collections.emptyList(),
                                                                Collections.emptyList(),
                                                                Collections.singletonList(String.valueOf(cv.getInvalidValue())));
            apiErrors.add(apiError);
        }
        ApiErrorResponse apiErrorResponse = new ApiErrorResponse(ApiErrorResponse.FAILURE, StringUtils.EMPTY, apiErrors);
       /* List<String> errors = ex.getConstraintViolations()
                .stream()
                .map(ConstraintViolation::getMessage)
                .collect(Collectors.toList());
        ApiResponse error = new ApiResponse(errors, INVALID_REQUEST, BAD_REQUEST);*/
        return new ResponseEntity<>(apiErrorResponse, BAD_REQUEST);
    }
}
