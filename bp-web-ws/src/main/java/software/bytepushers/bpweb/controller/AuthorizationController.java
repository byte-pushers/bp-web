package software.bytepushers.bpweb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
import software.bytepushers.bpweb.model.AuthCodeResponse;
import software.bytepushers.bpweb.model.AuthorizationPlatform;
import software.bytepushers.bpweb.service.AuthorizationRequestKeapService;
import software.bytepushers.bpweb.service.AuthorizationRequestService;

import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

import static software.bytepushers.bpweb.config.security.SecurityConstants.AUTHORIZE_APP_END_POINT;
@RestController
@RequestMapping(AUTHORIZE_APP_END_POINT)
public class AuthorizationController {
    @Autowired
    WebClient webClient;

    private Map<String, AuthorizationRequestService> registeredAuthorizationServices = new HashMap<>();

    public AuthorizationController() {
        registeredAuthorizationServices.put(AuthorizationPlatform.KEAP.name(), new AuthorizationRequestKeapService());
    }

    /*@ResponseStatus(HttpStatus.FOUND)
    @RequestMapping(produces = "application/json")
    public void getAuthorizationCode2(HttpServletResponse httpServletResponse, @RequestParam AuthorizationPlatform platformName) {
        AuthorizationRequestService service = this.registeredAuthorizationServices.get(platformName.name());
        // return service.authorize();
        httpServletResponse.setHeader("Location", service.authorizeUrl());
        httpServletResponse.setStatus(302);
    }*/

    @GetMapping
    Mono<String> getAuthorizationCode(@RequestParam AuthorizationPlatform platformName) {
        AuthorizationRequestService service = this.registeredAuthorizationServices.get(platformName.name());

        Mono<String> retrievedResource = webClient.get()
                .uri(service.authorizeUrl())
                .retrieve()
                .bodyToMono(String.class);
        return retrievedResource.map(string ->
                "We retrieved the following resource using Oauth: " + string);
    }
}
