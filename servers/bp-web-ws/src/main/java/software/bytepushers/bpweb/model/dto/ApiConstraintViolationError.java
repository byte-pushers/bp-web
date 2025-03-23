package software.bytepushers.bpweb.model.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

/**
 * The API response model.
 */
@Getter
@NoArgsConstructor
public class ApiConstraintViolationError extends ApiError {

    private static String type = "API VALIDATION ERROR";
    private List<String> validData = new ArrayList();
    private List<String> fields = new ArrayList();
    private List<String> rejectedValues = new ArrayList();

    public ApiConstraintViolationError(String code, String message,String debugMessage, List<String> fields, List<String> validData, List<String> rejectedValues) {
        super(code, type, message, debugMessage);
        this.fields = fields;
        this.validData = validData;
        this.rejectedValues = rejectedValues;
    }
}
