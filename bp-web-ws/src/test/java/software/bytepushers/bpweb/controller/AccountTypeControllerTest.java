package software.bytepushers.bpweb.controller;

import org.junit.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import software.bytepushers.bpweb.repository.AccountRepository;

import java.util.Collections;
import java.util.Optional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static software.bytepushers.bpweb.config.security.SecurityConstants.ACCOUNT_TYPE_END_POINT;

import software.bytepushers.bpweb.utils.ModelUtils;
import software.bytepushers.bpweb.model.entity.AccountType;


/**
 * The test cases for the user controller.
 */
public class AccountTypeControllerTest extends AbstractControllerTest {

    @MockBean private AccountRepository accountRepository;

    /**
     * The test case implementation to validate the account type create endpoint.
     * Validate that if any account type is not created earlier then it would create it.
     *
     * @throws Exception if something went wrong in request mapping.
     */
    @Test public void testCreateAccountTypes() throws Exception {
        Mockito.when(this.accountRepository.findByName(Mockito.any())).thenReturn(Optional.empty());
        MockHttpServletResponse response =
                mvc.perform(post(ACCOUNT_TYPE_END_POINT).contentType(MediaType.APPLICATION_JSON)).andReturn().getResponse();
        assert response.getStatus() == HttpStatus.OK.value() : "Account types must be created based on all roles.";
    }

    /**
     * The test case implementation to validate the fetching all account type endpoint.
     *
     * @throws Exception if something went wrong in request mapping.
     */
    @Test public void testGetAllAccountTypes() throws Exception {
        AccountType accountType = ModelUtils.accountType();
        Mockito.when(this.accountRepository.findAll()).thenReturn(Collections.singletonList(accountType));
        MockHttpServletResponse response = mvc.perform(get(ACCOUNT_TYPE_END_POINT).contentType(MediaType.APPLICATION_JSON)).andReturn().getResponse();
        assert response.getStatus() == HttpStatus.OK.value() : "Get all endpoint must returns all account types";
    }
}