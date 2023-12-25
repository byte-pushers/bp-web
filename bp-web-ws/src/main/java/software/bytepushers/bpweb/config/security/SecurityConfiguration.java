package software.bytepushers.bpweb.config.security;

import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.client.InMemoryReactiveOAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.ReactiveOAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.InMemoryReactiveClientRegistrationRepository;
import org.springframework.security.oauth2.client.registration.ReactiveClientRegistrationRepository;
import org.springframework.security.oauth2.client.web.reactive.function.client.ServerOAuth2AuthorizedClientExchangeFilterFunction;
import org.springframework.security.oauth2.client.web.server.AuthenticatedPrincipalServerOAuth2AuthorizedClientRepository;
import org.springframework.security.oauth2.client.web.server.ServerOAuth2AuthorizedClientRepository;
import org.springframework.security.oauth2.core.AuthorizationGrantType;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.web.reactive.function.client.WebClient;
import software.bytepushers.bpweb.config.CustomUserDetailsService;
import software.bytepushers.bpweb.config.JwtUtils;
import software.bytepushers.bpweb.config.security.filter.JwtAuthorizationFilter;
import software.bytepushers.bpweb.config.security.filter.RestAuthenticationEntryPoint;

import static software.bytepushers.bpweb.config.security.SecurityConstants.*;

/**
 * Security Configuration class for the  application
 */
@Log4j2
@EnableWebSecurity
@EnableWebFluxSecurity
@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    private final CustomUserDetailsService customUserDetailsService;

    private final RestAuthenticationEntryPoint restAuthenticationEntryPoint;

    private final JwtUtils jwtUtils;

    public SecurityConfiguration(CustomUserDetailsService customUserDetailsService, RestAuthenticationEntryPoint restAuthenticationEntryPoint,
                                 JwtUtils jwtUtils) {
        this.customUserDetailsService = customUserDetailsService;
        this.restAuthenticationEntryPoint = restAuthenticationEntryPoint;
        this.jwtUtils = jwtUtils;
    }

    /**
     * The bean configuration of the {@link BCryptPasswordEncoder}
     *
     * @return the single instance of password encoder.
     */
    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(this.customUserDetailsService).passwordEncoder(passwordEncoder());
    }

    /**
     * {@inheritDoc}
     */
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        log.info("Securing the rest endpoints");
        http.cors().and().csrf().disable().authorizeRequests().antMatchers(LOGIN_END_POINT, ACCOUNT_TYPE_END_POINT, ROLES_END_POINT).permitAll()
                .antMatchers(HttpMethod.POST, USERS_END_POINT).permitAll().antMatchers(HttpMethod.POST, "/api/v1/quotes").permitAll()
                .antMatchers(HttpMethod.GET, AUTHORIZE_APP_END_POINT).permitAll()
                .antMatchers("/api/**").hasAnyRole(ROLE_PREMIUM, ROLE_BASIC, ROLE_GUEST).anyRequest().permitAll().and().exceptionHandling()
                .authenticationEntryPoint(restAuthenticationEntryPoint).and()
                .addFilter(new JwtAuthorizationFilter(this.authenticationManager(), this.jwtUtils)).sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }

    /**
     * {@inheritDoc}
     */
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {
        http.authorizeExchange()
                .anyExchange()
                .authenticated()
                .and()
                .oauth2Login();
        return http.build();
    }

    @Bean
    WebClient webClient(
            ReactiveClientRegistrationRepository clientRegistrations,
            ServerOAuth2AuthorizedClientRepository authorizedClients) {
        ServerOAuth2AuthorizedClientExchangeFilterFunction oauth =
                new ServerOAuth2AuthorizedClientExchangeFilterFunction(
                        clientRegistrations,
                        authorizedClients);
        oauth.setDefaultOAuth2AuthorizedClient(true);
        return WebClient.builder()
                .filter(oauth)
                .build();
    }

    @Bean
    public ServerOAuth2AuthorizedClientRepository authorizedClients(ReactiveOAuth2AuthorizedClientService authorizedClientService) {
        return new AuthenticatedPrincipalServerOAuth2AuthorizedClientRepository(authorizedClientService);
    }

    @Bean
    public ReactiveOAuth2AuthorizedClientService authorizedClientService(ReactiveClientRegistrationRepository clientRegistrationRepository) {
        return new InMemoryReactiveOAuth2AuthorizedClientService(clientRegistrationRepository);
    }

    @Bean
    ReactiveClientRegistrationRepository clientRegistrations(
            @Value("${spring.security.oauth2.client.provider.keap.token-uri}") String token_uri,
            @Value("${spring.security.oauth2.client.registration.keap.client-id}") String client_id,
            @Value("${spring.security.oauth2.client.registration.keap.client-secret}") String client_secret,
            @Value("${spring.security.oauth2.client.registration.keap.authorization-grant-type}") String authorizationGrantType,
            @Value("${spring.security.oauth2.client.registration.keap.redirect-uri}") String redirectUriTemplate,
            @Value("${spring.security.oauth2.client.provider.keap.authorization-uri}") String authorizationUri
    ) {
        ClientRegistration registration = ClientRegistration
                .withRegistrationId("keap")
                .tokenUri(token_uri)
                .clientId(client_id)
                .clientSecret(client_secret)
                .redirectUriTemplate(redirectUriTemplate)
                .authorizationUri(authorizationUri)
                .authorizationGrantType(new AuthorizationGrantType(authorizationGrantType))
                .build();
        return new InMemoryReactiveClientRegistrationRepository(registration);
    }

    @Bean
    org.springframework.security.oauth2.client.ReactiveOAuth2AuthorizedClientService reactiveOAuth2AuthorizedClientService(ReactiveClientRegistrationRepository clientRegistrationRepository) {
        return new InMemoryReactiveOAuth2AuthorizedClientService(clientRegistrationRepository);
    }
}
