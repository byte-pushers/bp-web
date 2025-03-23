package software.bytepushers.bpweb.controller;

import org.apache.commons.lang3.StringUtils;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.junit4.SpringRunner;
import software.bytepushers.bpweb.model.dto.LoginDto;
import software.bytepushers.bpweb.model.dto.UserDetailsDto;
import software.bytepushers.bpweb.model.entity.User;
import software.bytepushers.bpweb.repository.UserRepository;
import software.bytepushers.bpweb.service.UserService;
import software.bytepushers.bpweb.utils.ModelUtils;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

import java.util.Optional;

import static software.bytepushers.bpweb.config.security.SecurityConstants.LOGIN_END_POINT;

import software.bytepushers.bpweb.model.dto.UserDto;
import software.bytepushers.bpweb.model.dto.LoginResponseDto;

@RunWith(SpringRunner.class)
@SpringBootTest
public abstract class AbstractLoginControllerTest extends AbstractControllerTest {

    protected static String JWT_TOKEN;
    protected static MockHttpServletResponse LOGIN_RESPONSE;
    @MockBean protected UserRepository userRepository;
    @MockBean protected UserService userService;

    @Before public void before() throws Exception {
        super.before();
        if (StringUtils.isBlank(JWT_TOKEN)) {
            User user = ModelUtils.userEntity();
            UserDto userDto = ModelUtils.userDto();
            LOGIN_RESPONSE = loginResponse(user, userDto.getUser());
            LoginResponseDto loginResponseDto = this.objectMapper.readValue(LOGIN_RESPONSE.getContentAsString(), LoginResponseDto.class);
            JWT_TOKEN = loginResponseDto.getToken();
        }
    }

    /**
     * The method implementation is responsible for generating the login response.
     *
     * @return the login response.
     * @throws Exception if something went wrong.
     */
    protected MockHttpServletResponse loginResponse(User user, UserDetailsDto userDto) throws Exception {
        LoginDto loginDto = ModelUtils.loginDto();
        Mockito.when(this.userRepository.findByUsername(loginDto.getUsername())).thenReturn(Optional.of(user));
        Mockito.when(this.userService.getByUsername(loginDto.getUsername())).thenReturn(userDto);
        //Below line won't include the password as it is marked as only writable field.
        String requestBodyInJson = this.objectMapper.writeValueAsString(loginDto);
        MockHttpServletResponse response =
                mvc.perform(post(LOGIN_END_POINT).contentType(MediaType.APPLICATION_JSON).content(requestBodyInJson)).andReturn().getResponse();
        assert response.getStatus() == HttpStatus.OK.value() : "User login request must be executed successfully";
        return response;
    }

}
