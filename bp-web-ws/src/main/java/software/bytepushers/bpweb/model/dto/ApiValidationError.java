package software.bytepushers.bpweb.model.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import software.bytepushers.bpweb.utils.ApplicationUtils;

import java.util.ArrayList;
import java.util.List;

/**
 * The API response model.
 */
@Getter
@NoArgsConstructor
public class ApiValidationError extends ApiError {

    private static String type = "API VALIDATION ERROR";
    private List<String> validData = new ArrayList();
    private List<String> fields = new ArrayList();
    private List<String> rejectedValues = new ArrayList();

    public ApiValidationError(ApiConstants.ErrorEnum errorEnum, List fields) {
        super(errorEnum.getCode(), type, errorEnum.getMessage(), errorEnum.getDebugMessage());
        this.fields = fields;
    }

    public ApiValidationError(ApiConstants.ErrorEnum errorEnum, List fields, List rejectedValues) {
        super(errorEnum.getCode(), type, ApplicationUtils.replaceDynamicResponseValue(errorEnum.getMessage(), rejectedValues),
              ApplicationUtils.replaceDynamicResponseValue(errorEnum.getDebugMessage(), rejectedValues));
        this.fields = fields;
        this.rejectedValues = rejectedValues;
    }
}
