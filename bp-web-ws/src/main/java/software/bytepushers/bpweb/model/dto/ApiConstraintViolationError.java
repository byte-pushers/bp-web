package software.bytepushers.bpweb.model.dto;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import software.bytepushers.bpweb.utils.ApplicationUtils;

import java.util.ArrayList;
import java.util.List;

/**
 * The API response model.
 */
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
public class ApiConstraintViolationError extends ApiError {

    private static String type = "API VALIDATION ERROR";
    private List<String> validData = new ArrayList();
    private List<String> fields = new ArrayList();
    private List<String> rejectedValues = new ArrayList();

    public ApiConstraintViolationError(String code, String message) {
        super(code, type, message);
    }

    public ApiConstraintViolationError(String code, String message, String debugMessage) {
        super(code, type, message, debugMessage);
    }

    public ApiConstraintViolationError(String code, String message, List<String> fields) {
        super(code, type, message);
        this.fields = fields;
    }

    public ApiConstraintViolationError(String code, String message,String debugMessage, List<String> fields, List<String> validData, List<String> rejectedValues) {
        super(code, type, message, debugMessage);
        this.fields = fields;
        this.validData = validData;
        this.rejectedValues = rejectedValues;
    }

    public ApiConstraintViolationError(String code, String message, List<String> fields, List<String> rejectedValues) {
        super(code, type, message);
        this.fields = fields;
        this.rejectedValues = rejectedValues;
    }

    public ApiConstraintViolationError(ApiConstants.ErrorEnum errorEnum, List<String> fields, List<String> validData, List<String> rejectedValues) {
        super(errorEnum.getCode(), type, ApplicationUtils.replaceDynamicResponseValue(errorEnum.getMessage(), rejectedValues),
              ApplicationUtils.replaceDynamicResponseValue(errorEnum.getDebugMessage(), rejectedValues));
        this.fields = fields;
        this.validData = validData;
        this.rejectedValues = rejectedValues;
    }

    public ApiConstraintViolationError(ApiConstants.ErrorEnum errorEnum, List fields) {
        super(errorEnum.getCode(), type, errorEnum.getMessage(), errorEnum.getDebugMessage());
        this.fields = fields;
    }

    public ApiConstraintViolationError(ApiConstants.ErrorEnum errorEnum, List fields, List rejectedValues) {
        super(errorEnum.getCode(), type, ApplicationUtils.replaceDynamicResponseValue(errorEnum.getMessage(), rejectedValues),
              ApplicationUtils.replaceDynamicResponseValue(errorEnum.getDebugMessage(), rejectedValues));
        this.fields = fields;
        this.rejectedValues = rejectedValues;
    }
}
