package software.bytepushers.bpweb.service;

import io.netty.channel.ChannelOption;
import io.netty.handler.timeout.ReadTimeoutHandler;
import io.netty.handler.timeout.WriteTimeoutHandler;
import software.bytepushers.bpweb.model.AuthCodeResponse;

import reactor.netty.http.client.HttpClient;

import java.text.MessageFormat;
import java.time.Duration;
import java.util.concurrent.TimeUnit;

public class AuthorizationRequestKeapService implements AuthorizationRequestService {
    private HttpClient httpClient;

    public AuthorizationRequestKeapService() {
        httpClient = HttpClient.create()
                .tcpConfiguration(client -> {
                    client.doOnConnected(conn ->
                            conn.addHandlerLast(new ReadTimeoutHandler(5000, TimeUnit.MILLISECONDS))
                                    .addHandlerLast(new WriteTimeoutHandler(5000, TimeUnit.MILLISECONDS)));
                    return client.option(ChannelOption.CONNECT_TIMEOUT_MILLIS, 10000);
                })
                .responseTimeout(Duration.ofMillis(5000));
    }
    @Override
    public AuthCodeResponse authorize() {
        return this.httpClient.followRedirect(true)
                .get()
                .uri(this.authorizeUrl())
                .responseSingle((response, bytes) -> bytes.asString().map(it -> new AuthCodeResponse(/*response.status().code(), */it)))
                .block();
    }

    @Override
    public String authorizeUrl() {
        String clientId = "a05db9db-c5fb-4425-a8dd-aa712764d1f8";
        String redirectUri = "https://localhost:4200/admin/crm";
        String responseType = "code";
        String scope = "full";

        StringBuilder urlStringBuilder = new StringBuilder();
        urlStringBuilder.append("https://accounts.infusionsoft.com/app/oauth/authorize");
        urlStringBuilder.append("?client_id={0}&redirect_uri={1}&response_type={2}&scope={3}");

        return MessageFormat.format(urlStringBuilder.toString(), clientId, redirectUri, responseType, scope);
    }
}
