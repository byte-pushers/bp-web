package software.bytepushers.bpweb.exceptions;

import software.bytepushers.bpweb.model.dto.ApiErrorResponse;

public class MalformedRequestException extends ApplicationMessageException {

    private ApiErrorResponse apiErrorResponse;
    public MalformedRequestException(String... msgs) {
        super(msgs);
    }

    public MalformedRequestException(ApiErrorResponse apiErrorResponse){
        this.apiErrorResponse = apiErrorResponse;
    }

    public ApiErrorResponse getApiResponse1() {
        return apiErrorResponse;
    }
}
