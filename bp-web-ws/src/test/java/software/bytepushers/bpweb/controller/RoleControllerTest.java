package software.bytepushers.bpweb.controller;

import org.junit.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import software.bytepushers.bpweb.model.dto.UserDetailsDto;
import software.bytepushers.bpweb.model.dto.enums.AccountTypeEnum;
import software.bytepushers.bpweb.model.entity.Role;
import software.bytepushers.bpweb.model.entity.User;
import software.bytepushers.bpweb.repository.RoleRepository;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import software.bytepushers.bpweb.utils.ModelUtils;

import static software.bytepushers.bpweb.config.security.SecurityConstants.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

/**
 * The test cases for the user controller.
 */
public class RoleControllerTest extends AbstractLoginControllerTest {

    @MockBean private RoleRepository roleRepository;

    /**
     * The test case implementation to validate the account type create endpoint.
     * Validate that if any account type is not created earlier then it would create it.
     *
     * @throws Exception if something went wrong in request mapping.
     */
    @Test public void testCreateAccountTypes() throws Exception {
        UserDetailsDto userDetailsDto = ModelUtils.userDto().getUser();
        userDetailsDto.setRoles(Collections.singletonList("ROLE_" + ROLE_BASIC));
        User user = ModelUtils.userEntity();
        user.getRoles().forEach(role -> role.setName("ROLE_" + ROLE_BASIC));
        MockHttpServletResponse loginResponse = loginResponse(user, userDetailsDto);
        List<String> roles = Arrays.asList(AccountTypeEnum.BASIC.getRoleName(), AccountTypeEnum.GUEST.getRoleName());
        String requestBodyInJson = this.objectMapper.writeValueAsString(roles);
        Mockito.when(this.roleRepository.findByName(Mockito.any())).thenReturn(Optional.empty());
        MockHttpServletResponse response = mvc.perform(
                post(ROLES_END_POINT).content(requestBodyInJson).cookie(loginResponse.getCookie(JWT_TOKEN_COOKIE_NAME))
                                     .contentType(MediaType.APPLICATION_JSON)).andReturn().getResponse();
        assert response.getStatus() == HttpStatus.OK.value() : "Applied roles must be created successfully.";
    }

    /**
     * The test case implementation to validate the fetching all account type endpoint.
     *
     * @throws Exception if something went wrong in request mapping.
     */
    @Test public void testGetAllAccountTypes() throws Exception {
        UserDetailsDto userDto = ModelUtils.userDto().getUser();
        userDto.setRoles(Collections.singletonList("ROLE_" + ROLE_BASIC));
        User user = ModelUtils.userEntity();
        user.getRoles().forEach(role -> role.setName("ROLE_" + ROLE_BASIC));
        MockHttpServletResponse loginResponse = loginResponse(user, userDto);
        Role role = ModelUtils.role();
        Mockito.when(this.roleRepository.findAll()).thenReturn(Collections.singletonList(role));
        MockHttpServletResponse response =
                mvc.perform(get(ROLES_END_POINT).cookie(loginResponse.getCookie(JWT_TOKEN_COOKIE_NAME)).contentType(MediaType.APPLICATION_JSON))
                   .andReturn().getResponse();
        assert response.getStatus() == HttpStatus.OK.value() : "Get all endpoint must returns all roles";
    }


}