package software.bytepushers.bpweb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

/**
 * The spring boot application for the byte pushers web services.
 */
@SpringBootApplication
@EnableJpaAuditing
public class BpWebWsApplication {

    public static void main(String[] args) {
        SpringApplication.run(BpWebWsApplication.class, args);
    }

}