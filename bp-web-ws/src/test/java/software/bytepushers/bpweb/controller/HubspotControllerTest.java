package software.bytepushers.bpweb.controller;

import org.junit.Ignore;
import org.junit.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import software.bytepushers.bpweb.model.dto.HubSpotContactDto;
import software.bytepushers.bpweb.service.HubspotService;
import software.bytepushers.bpweb.utils.ModelUtils;

import java.util.Map;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

/**
 * The test case implementation fro the quotes
 */
@Ignore
public class HubspotControllerTest extends AbstractControllerTest {

    private final static String HUBSPOT_ENDPOINT = "/api/v1/hubspot";
    private final static String CREATE_CONTACT_ENDPOINT = "/contact";

    @MockBean
    private HubspotService hubspotService;

    /**
     *
     * @throws Exception
     */
    @Test
    public void createHubspotContactTest() throws Exception {
        HubSpotContactDto hubSpotContactDto = ModelUtils.hubspotContactEntity();
        String requestBody = this.objectMapper.writeValueAsString(hubSpotContactDto);
        Mockito.when(this.hubspotService.createHubspotContact(Mockito.any())).thenReturn(ModelUtils.hubspotContactResponseEntity());
        MockHttpServletResponse response = mvc.perform(post(HUBSPOT_ENDPOINT + CREATE_CONTACT_ENDPOINT)
                .contentType(MediaType.APPLICATION_JSON).content(requestBody)).andReturn().getResponse();
        assert response.getStatus() == HttpStatus.CREATED.value() : "Hubspot contact must be created with valid id";
    }
}
