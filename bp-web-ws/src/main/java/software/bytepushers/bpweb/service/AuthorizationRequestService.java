package software.bytepushers.bpweb.service;

import software.bytepushers.bpweb.model.AuthCodeResponse;

public interface AuthorizationRequestService {

    AuthCodeResponse authorize();
    String authorizeUrl();
}
