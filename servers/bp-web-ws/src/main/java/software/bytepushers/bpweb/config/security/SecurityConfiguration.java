package software.bytepushers.bpweb.config.security;

import lombok.extern.log4j.Log4j2;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.access.hierarchicalroles.RoleHierarchy;
import org.springframework.security.access.hierarchicalroles.RoleHierarchyImpl;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.expression.DefaultWebSecurityExpressionHandler;
import software.bytepushers.bpweb.config.CustomUserDetailsService;
import software.bytepushers.bpweb.config.JwtUtils;
import software.bytepushers.bpweb.config.security.filter.JwtAuthorizationFilter;
import software.bytepushers.bpweb.config.security.filter.RestAuthenticationEntryPoint;

import static org.springframework.security.config.Customizer.withDefaults;
import static software.bytepushers.bpweb.config.security.SecurityConstants.*;

/**
 * Security Configuration class for the  application
 */
@Log4j2
@Configuration
public class SecurityConfiguration {

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
    @Bean public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    /**
     * {@inheritDoc}
     */
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(this.customUserDetailsService).passwordEncoder(passwordEncoder());
    }

    /**
     * {@inheritDoc}
     */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        log.info("Securing the rest endpoints");
        http.cors().and().csrf().disable().authorizeRequests().antMatchers(LOGIN_END_POINT, ACCOUNT_TYPE_END_POINT, ROLES_END_POINT).permitAll()
            .antMatchers(HttpMethod.POST, USERS_END_POINT).permitAll().antMatchers(HttpMethod.POST, "/api/v1/quotes").permitAll()
            .antMatchers("/api/**").hasAnyRole(ROLE_PREMIUM, ROLE_BASIC, ROLE_GUEST).anyRequest().permitAll().and().exceptionHandling()
            .authenticationEntryPoint(restAuthenticationEntryPoint).and()
            .addFilter(new JwtAuthorizationFilter(this.authenticationManager(), this.jwtUtils)).sessionManagement()
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        return http
                .httpBasic(withDefaults())
                .csrf(AbstractHttpConfigurer::disable)
                .cors(withDefaults())
                .authorizeRequests()
                .expressionHandler(customWebSecurityExpressionHandler())
                .requestMatchers(LOGIN_END_POINT, ACCOUNT_TYPE_END_POINT, ROLES_END_POINT)
                .permitAll()
                .requestMatchers("/api/**", "/api/events")
                .hasAnyRole("ROLE_PREMIUM, ROLE_BASIC, ROLE_GUEST").anyRequest().permitAll().and().exceptionHandling()
                .authenticationEntryPoint(restAuthenticationEntryPoint).and()
                .addFilter(new JwtAuthorizationFilter(this.authenticationManager(), this.jwtUtils)).sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .anyRequest().authenticated().and().build();
    }

    /**
     * {@inheritDoc}
     */
    @Bean public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public RoleHierarchy roleHierarchy() {
        RoleHierarchyImpl roleHierarchy = new RoleHierarchyImpl();
        String hierarchy = "ROLE_ADMIN > ROLE_STAFF \n ROLE_STAFF > ROLE_USER";
        roleHierarchy.setHierarchy(hierarchy);
        return roleHierarchy;
    }

    @Bean
    public DefaultWebSecurityExpressionHandler customWebSecurityExpressionHandler() {
        DefaultWebSecurityExpressionHandler expressionHandler = new DefaultWebSecurityExpressionHandler();
        expressionHandler.setRoleHierarchy(roleHierarchy());
        return expressionHandler;
    }

}
