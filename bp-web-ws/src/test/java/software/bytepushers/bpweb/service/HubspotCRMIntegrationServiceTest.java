package software.bytepushers.bpweb.service;

import org.apache.commons.lang3.StringUtils;
import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Matchers;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.web.client.RestTemplate;
import software.bytepushers.bpweb.model.entity.Quote;
import software.bytepushers.bpweb.service.impl.HubspotCRMIntegrationService;
import software.bytepushers.bpweb.utils.ModelUtils;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.UUID;

import static org.mockito.Mockito.when;

/**
 * The quote service test cases
 */
@ExtendWith(SpringExtension.class)
public class HubspotCRMIntegrationServiceTest {
    @InjectMocks private HubspotCRMIntegrationService hubspotCRMIntegrationService;
    @Mock private RestTemplate restTemplate;

    @Before public void before() {
        MockitoAnnotations.initMocks(this);
    }

    /**
     * The test case implementation is responsible for validating the save operation of the quote service.
     */
    @Test public void testHubspotCreateSuccessAllEntities() {
        Quote quote = ModelUtils.quoteEntity();
        quote.setId(UUID.randomUUID());

        Random random = new Random();
        Map<String, String> respontMap = new HashMap<>();
        respontMap.put("id", String.valueOf(random.nextInt(5000)));
        ResponseEntity<Map> responseEntity = new ResponseEntity<Map>(respontMap, HttpStatus.OK);
        when(restTemplate.exchange(Matchers.anyString(), Matchers.any(HttpMethod.class), Matchers.any(), Matchers.<Class<Map>>any())).thenReturn(
                responseEntity);
        Quote createdQuote = hubspotCRMIntegrationService.createEntities(quote);

        assert createdQuote != null && !StringUtils.isEmpty(createdQuote.getHubspotContactId()) : "Hubspot contact must be created";
        assert createdQuote != null && !StringUtils.isEmpty(createdQuote.getHubspotCompanyId()) : "Hubspot company must be created";
        assert createdQuote != null && !StringUtils.isEmpty(createdQuote.getHubspotDealId()) : "Hubspot deal must be created";
        assert createdQuote != null && !StringUtils.isEmpty(createdQuote.getHubspotQuoteId()) : "Hubspot quote must be created";
    }

    @Test public void testHubspotContactSuccess() {
        Quote quote = ModelUtils.quoteEntity();
        quote.setId(UUID.randomUUID());

        Random random = new Random();
        Map<String, String> respontMap = new HashMap<>();
        respontMap.put("id", String.valueOf(random.nextInt(5000)));
        ResponseEntity<Map> responseEntity = new ResponseEntity<Map>(respontMap, HttpStatus.OK);
        when(restTemplate.exchange(Matchers.eq("null/contact"), Matchers.any(HttpMethod.class), Matchers.any(),
                                   Matchers.<Class<Map>>any())).thenReturn(responseEntity);
        ResponseEntity<Map> failedEntity = new ResponseEntity<Map>(null, HttpStatus.BAD_REQUEST);
        when(restTemplate.exchange(Matchers.eq("null/company"), Matchers.any(HttpMethod.class), Matchers.any(),
                                   Matchers.<Class<Map>>any())).thenReturn(failedEntity);
        when(restTemplate.exchange(Matchers.eq("null/deal"), Matchers.any(HttpMethod.class), Matchers.any(), Matchers.<Class<Map>>any())).thenReturn(
                failedEntity);
        when(restTemplate.exchange(Matchers.eq("null/quote"), Matchers.any(HttpMethod.class), Matchers.any(), Matchers.<Class<Map>>any())).thenReturn(
                failedEntity);
        Quote createdQuote = hubspotCRMIntegrationService.createEntities(quote);

        assert createdQuote != null && StringUtils.isEmpty(createdQuote.getHubspotContactId()) : "Hubspot contact must be created";
        assert createdQuote != null && StringUtils.isEmpty(createdQuote.getHubspotCompanyId()) : "Hubspot company must be created";
        assert createdQuote != null && StringUtils.isEmpty(createdQuote.getHubspotDealId()) : "Hubspot deal must be created";
        assert createdQuote != null && StringUtils.isEmpty(createdQuote.getHubspotQuoteId()) : "Hubspot quote must be created";
    }

    @Test public void testHubspotContactFailed() {
        Quote quote = ModelUtils.quoteEntity();
        quote.setId(UUID.randomUUID());
        ResponseEntity<Map> responseEntity = new ResponseEntity<Map>(null, HttpStatus.BAD_REQUEST);
        when(restTemplate.exchange(Matchers.anyString(), Matchers.any(HttpMethod.class), Matchers.any(), Matchers.<Class<Map>>any())).thenReturn(
                responseEntity);
        Quote createdQuote = hubspotCRMIntegrationService.createEntities(quote);

        assert createdQuote != null && StringUtils.isEmpty(createdQuote.getHubspotContactId()) : "Hubspot contact must be created";
        assert createdQuote != null && StringUtils.isEmpty(createdQuote.getHubspotCompanyId()) : "Hubspot company must be created";
        assert createdQuote != null && StringUtils.isEmpty(createdQuote.getHubspotDealId()) : "Hubspot deal must be created";
        assert createdQuote != null && StringUtils.isEmpty(createdQuote.getHubspotQuoteId()) : "Hubspot quote must be created";
    }
}
