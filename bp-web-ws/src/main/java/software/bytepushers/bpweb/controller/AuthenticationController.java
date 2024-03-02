package software.bytepushers.bpweb.controller;


import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import software.bytepushers.bpweb.config.JwtUtils;
import software.bytepushers.bpweb.model.dto.LoginDto;
import software.bytepushers.bpweb.service.UserService;
import software.bytepushers.bpweb.model.dto.LoginResponseDto;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import software.bytepushers.bpweb.model.dto.UserDetailsDto;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;

import static software.bytepushers.bpweb.config.security.SecurityConstants.*;

@Log4j2
@RestController
public class AuthenticationController {

    private final AuthenticationManager authenticationManager;

    private final UserService userService;

    private final JwtUtils jwtUtils;

    public AuthenticationController(AuthenticationManager authenticationManager,
                                    UserService userService, JwtUtils jwtUtils) {
        this.authenticationManager = authenticationManager;
        this.userService = userService;
        this.jwtUtils = jwtUtils;
    }

    /**
     * The rest endpoint implementation for the initiating the login process.
     *
     * @param loginDto with user credentials
     * @return the logged in user details
     */
    @PostMapping(LOGIN_END_POINT)
    public ResponseEntity<LoginResponseDto> login(@RequestBody @Valid LoginDto loginDto,
                                                  HttpServletRequest request, HttpServletResponse response) {
        try {
            String username = loginDto.getUsername();
            String password = loginDto.getPassword();
            log.info("Login. Username: {}", username);
            UsernamePasswordAuthenticationToken authRequest = new UsernamePasswordAuthenticationToken(username, password);
            this.authenticationManager.authenticate(authRequest);
            UserDetailsDto userDetails = this.userService.getByUsername(username);
            log.info("Login Successful. Username: {}", username);
            Date expiration = new Date(System.currentTimeMillis() + TOKEN_EXPIRY_TIME);
            LocalDateTime tokenExpiredAt = expiration.toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime();
            String token = this.jwtUtils.generateJwtToken(userDetails.getUsername(), userDetails.getRoles(), expiration);
            this.jwtUtils.sendTokenInCookie(token, request, response);
            return new ResponseEntity<>(new LoginResponseDto(token,tokenExpiredAt.toString(), TOKEN_PREFIX.trim(),userDetails), HttpStatus.OK);
        } catch (Exception e) {
            log.error("Login error: {}", e.getMessage(), e);
            throw new UsernameNotFoundException("Invallid credentials");
        }
    }

    /**
     * The rest endpoint implementation to perform the logout.
     *
     * @param request  to read cookies
     * @param response to write the cookies
     */
    @PostMapping(LOGOUT_END_POINT)
    public ResponseEntity<?> logout(HttpServletRequest request, HttpServletResponse response) {
        this.jwtUtils.cleanJwtTokenCookie(request, response);
        return ResponseEntity.ok().build();
    }

}
