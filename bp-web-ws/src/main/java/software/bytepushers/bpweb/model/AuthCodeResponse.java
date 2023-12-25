package software.bytepushers.bpweb.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
public class AuthCodeResponse {
    private String accessToken;
    private String tokenType;
    private Integer expiresIn;
    private String refreshToken;
    private String scope;
    private String applicationName;
    private String value;

    public AuthCodeResponse(String value) {
        this.value = value;
    }
}
