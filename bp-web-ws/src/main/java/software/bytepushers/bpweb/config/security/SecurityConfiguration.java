package software.bytepushers.bpweb.config.security;

import lombok.extern.log4j.Log4j2;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import software.bytepushers.bpweb.config.CustomUserDetailsService;
import software.bytepushers.bpweb.config.JwtUtils;
import software.bytepushers.bpweb.config.security.filter.JwtAuthorizationFilter;
import software.bytepushers.bpweb.config.security.filter.RestAuthenticationEntryPoint;

import static software.bytepushers.bpweb.config.security.SecurityConstants.*;

/**
 * Security Configuration class for the  application
 */
@Log4j2
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
    @Bean public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    /**
     * {@inheritDoc}
     */
    @Override public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(this.customUserDetailsService).passwordEncoder(passwordEncoder());
    }

    /**
     * {@inheritDoc}
     */
    @Override protected void configure(HttpSecurity http) throws Exception {
        log.info("Securing the rest endpoints");
        http.cors().and().csrf().disable().authorizeRequests().antMatchers(LOGIN_END_POINT, ACCOUNT_TYPE_END_POINT, ROLES_END_POINT).permitAll()
            .antMatchers(HttpMethod.POST, USERS_END_POINT).permitAll().antMatchers(HttpMethod.POST, "/api/v1/quotes").permitAll()
            .antMatchers("/api/**").hasAnyRole(ROLE_PREMIUM, ROLE_BASIC, ROLE_GUEST).anyRequest().permitAll().and().exceptionHandling()
            .authenticationEntryPoint(restAuthenticationEntryPoint).and()
            .addFilter(new JwtAuthorizationFilter(this.authenticationManager(), this.jwtUtils)).sessionManagement()
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }

    /**
     * {@inheritDoc}
     */
    @Bean @Override public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

}
