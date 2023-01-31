package software.bytepushers.bpweb.exceptions;

import software.bytepushers.bpweb.model.dto.ApiResponse1;

public class MalformedRequestException extends ApplicationMessageException {

    private ApiResponse1 apiResponse1;
    public MalformedRequestException(String... msgs) {
        super(msgs);
    }

    public MalformedRequestException(ApiResponse1 apiResponse1){
        this.apiResponse1 = apiResponse1;
    }

    public ApiResponse1 getApiResponse1() {
        return apiResponse1;
    }
}
