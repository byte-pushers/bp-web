package software.bytepushers.bpweb.config.security.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.lang3.StringUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;
import software.bytepushers.bpweb.model.dto.ApiConstraintViolationError;
import software.bytepushers.bpweb.model.dto.ApiError;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collections;

import static org.springframework.http.HttpStatus.FORBIDDEN;
import static org.springframework.http.HttpStatus.UNAUTHORIZED;
import static software.bytepushers.bpweb.config.security.SecurityConstants.TOKEN_ERROR_ATTRIBUTE_KEY;

/**
 * The custom authentication entry point to handle the authentication errors
 */
@Component
public class RestAuthenticationEntryPoint implements AuthenticationEntryPoint {

    private final ObjectMapper objectMapper;

    public RestAuthenticationEntryPoint(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    /**
     * {@inheritDoc}
     */
    @Override public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException e) throws IOException {

        String tokenError = (String) request.getAttribute(TOKEN_ERROR_ATTRIBUTE_KEY);
        request.removeAttribute(TOKEN_ERROR_ATTRIBUTE_KEY); //Cleanup on request attribute
        HttpStatus responseStatus = StringUtils.isBlank(tokenError) ? FORBIDDEN : UNAUTHORIZED;
        String errorMessage = StringUtils.isBlank(tokenError) ? e.getMessage() : tokenError;

        response.setStatus(responseStatus.value());

        ApiError apiError = new ApiError(String.valueOf(responseStatus.value()), responseStatus.getReasonPhrase(), responseStatus.getReasonPhrase());

        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        byte[] body = this.objectMapper.writeValueAsBytes(apiError);
        response.getOutputStream().write(body);
    }
}
