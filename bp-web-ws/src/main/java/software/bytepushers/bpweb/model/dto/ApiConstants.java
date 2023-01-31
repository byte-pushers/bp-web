package software.bytepushers.bpweb.model.dto;

public class ApiConstants {

    public static final String API_ERROR_E001 = "api.error.e001";
    public static final String API_MESSAGE_E001 = "Something went wrong";
    public static final String API_DEBUG_MESSAGE_E001 = "Exception occurred : $0";

    public static final String API_VALIDATION_ERROR_E001 = "api.validation.error.e001";
    public static final String API_VALIDATION_MESSAGE_E001 = "Quote must not be empty";
    public static final String API_VALIDATION_DEBUG_MESSAGE_E001 = "Quote is mandatory field";

    public static final String API_VALIDATION_ERROR_E002 = "api.validation.error.e002";
    public static final String API_VALIDATION_MESSAGE_E002 = "Quote not found to update having quoteId $0";
    public static final String API_VALIDATION_DEBUG_MESSAGE_E002 = "Quote must be exist in the database having quiteId $0 to update";

    public static final String API_VALIDATION_ERROR_E003 = "api.validation.error.e003";
    public static final String API_VALIDATION_MESSAGE_E003 = "Quote not found for quoteId $0";
    public static final String API_VALIDATION_DEBUG_MESSAGE_E003 = "Quote must be exist in the database having quiteId $0";

    public static final String API_VALIDATION_ERROR_E004 = "api.validation.error.e004";
    public static final String API_VALIDATION_MESSAGE_E004 = "Quote not found to delete having quoteId $0";
    public static final String API_VALIDATION_DEBUG_MESSAGE_E004 = "Quote must be exist in the database having quiteId $0 to delete";
    public static final String QUOTE_FIELD = "quote";


    public enum ErrorEnum {

        COMMON_API_ERROR(API_ERROR_E001, API_MESSAGE_E001, API_DEBUG_MESSAGE_E001),
        QUOTE_EMPTY_ERROR(API_VALIDATION_ERROR_E001, API_VALIDATION_MESSAGE_E001, API_VALIDATION_DEBUG_MESSAGE_E001),
        QUOTE_NOT_FOUND_TO_UPDATE(API_VALIDATION_ERROR_E002, API_VALIDATION_MESSAGE_E002, API_VALIDATION_DEBUG_MESSAGE_E002),
        QUOTE_NOT_FOUND_TO_SEARCH(API_VALIDATION_ERROR_E003, API_VALIDATION_MESSAGE_E003, API_VALIDATION_DEBUG_MESSAGE_E003),
        QUOTE_NOT_FOUND_TO_DELETE(API_VALIDATION_ERROR_E004, API_VALIDATION_MESSAGE_E004, API_VALIDATION_DEBUG_MESSAGE_E004);

        private final String code;
        private final String message;
        private final String debugMessage;

        ErrorEnum(String code, String message, String debugMessage) {
            this.code = code;
            this.message = message;
            this.debugMessage = debugMessage;
        }

        public String getCode() {
            return code;
        }

        public String getMessage() {
            return message;
        }

        public String getDebugMessage() {
            return debugMessage;
        }
    }

}
