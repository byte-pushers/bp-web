package software.bytepushers.bpweb.config;

import org.springframework.beans.factory.annotation.Value;
/*import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.http.client.SimpleClientHttpRequestFactory;*/
import org.springframework.stereotype.Component;
/*import org.springframework.web.client.RestTemplate;

import java.time.Duration;*/

@Component
public class ApplicationConfiguration {

    @Value("${bp.web.connection.timeout:9}") int restTemplateConnectionTimeout;

    @Value("${bp.web.request.timeout:9}") int restTemplateRequestTimeout;

    /*@Bean public RestTemplate getRestTemplate(RestTemplateBuilder restTemplateBuilder) {
        return restTemplateBuilder.setConnectTimeout(Duration.ofSeconds(restTemplateConnectionTimeout))
                                  .setReadTimeout(Duration.ofSeconds(restTemplateRequestTimeout)).build();
    }*/
}
