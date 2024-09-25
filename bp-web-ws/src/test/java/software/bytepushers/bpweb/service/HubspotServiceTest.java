package software.bytepushers.bpweb.service;

import org.apache.commons.lang3.StringUtils;
import org.junit.Assert;
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
import software.bytepushers.bpweb.exceptions.MalformedRequestException;
import software.bytepushers.bpweb.model.dto.HubSpotContactDto;
import software.bytepushers.bpweb.model.entity.Quote;
import software.bytepushers.bpweb.service.impl.HubspotServiceImpl;
import software.bytepushers.bpweb.utils.ModelUtils;
import software.bytepushers.bpweb.utils.TestConstants;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.UUID;

import static org.mockito.Mockito.when;

/**
 * The quote service test cases
 */
@ExtendWith(SpringExtension.class) public class HubspotServiceTest {
    @InjectMocks private HubspotServiceImpl hubspotServiceImpl;
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
        ResponseEntity<Map> responseEntity = new ResponseEntity<>(respontMap, HttpStatus.OK);
        when(restTemplate.exchange(Matchers.anyString(), Matchers.any(HttpMethod.class), Matchers.any(), Matchers.<Class<Map>>any())).thenReturn(
                responseEntity);
        Quote createdQuote = hubspotServiceImpl.createHubspotEntities(quote);

        assert createdQuote != null && !StringUtils.isEmpty(createdQuote.getHubspotContactId()) : "Hubspot contact must be created";
        assert !StringUtils.isEmpty(createdQuote.getHubspotCompanyId()) : "Hubspot company must be created";
        assert !StringUtils.isEmpty(createdQuote.getHubspotDealId()) : "Hubspot deal must be created";
        assert !StringUtils.isEmpty(createdQuote.getHubspotQuoteId()) : "Hubspot quote must be created";
    }

    @Test public void testHubspotContactSuccess() {
        Quote quote = ModelUtils.quoteEntity();
        quote.setId(UUID.randomUUID());

        Random random = new Random();
        Map<String, String> respontMap = new HashMap<>();
        respontMap.put("id", String.valueOf(random.nextInt(5000)));
        ResponseEntity<Map> responseEntity = new ResponseEntity<>(respontMap, HttpStatus.OK);
        when(restTemplate.exchange(Matchers.eq("null/contact"), Matchers.any(HttpMethod.class), Matchers.any(),
                Matchers.<Class<Map>>any())).thenReturn(responseEntity);
        ResponseEntity<Map> failedEntity = new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        when(restTemplate.exchange(Matchers.eq("null/company"), Matchers.any(HttpMethod.class), Matchers.any(),
                Matchers.<Class<Map>>any())).thenReturn(failedEntity);
        when(restTemplate.exchange(Matchers.eq("null/deal"), Matchers.any(HttpMethod.class), Matchers.any(), Matchers.<Class<Map>>any())).thenReturn(
                failedEntity);
        when(restTemplate.exchange(Matchers.eq("null/quote"), Matchers.any(HttpMethod.class), Matchers.any(), Matchers.<Class<Map>>any())).thenReturn(
                failedEntity);
        Quote createdQuote = hubspotServiceImpl.createHubspotEntities(quote);

        assert createdQuote != null && StringUtils.isEmpty(createdQuote.getHubspotContactId()) : "Hubspot contact must be created";
        assert StringUtils.isEmpty(createdQuote.getHubspotCompanyId()) : "Hubspot company must be created";
        assert StringUtils.isEmpty(createdQuote.getHubspotDealId()) : "Hubspot deal must be created";
        assert StringUtils.isEmpty(createdQuote.getHubspotQuoteId()) : "Hubspot quote must be created";
    }

    @Test public void testHubspotContactFailed() {
        Quote quote = ModelUtils.quoteEntity();
        quote.setId(UUID.randomUUID());
        ResponseEntity<Map> responseEntity = new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        when(restTemplate.exchange(Matchers.anyString(), Matchers.any(HttpMethod.class), Matchers.any(), Matchers.<Class<Map>>any())).thenReturn(
                responseEntity);
        Quote createdQuote = hubspotServiceImpl.createHubspotEntities(quote);

        assert createdQuote != null && StringUtils.isEmpty(createdQuote.getHubspotContactId()) : "Hubspot contact must be created";
        assert StringUtils.isEmpty(createdQuote.getHubspotCompanyId()) : "Hubspot company must be created";
        assert StringUtils.isEmpty(createdQuote.getHubspotDealId()) : "Hubspot deal must be created";
        assert StringUtils.isEmpty(createdQuote.getHubspotQuoteId()) : "Hubspot quote must be created";
    }

    @Test public void testHubspotContactCreateSuccess() {
        HubSpotContactDto hubSpotContactDto = new HubSpotContactDto();
        ResponseEntity<Map> responseEntity = new ResponseEntity<>(ModelUtils.hubspotContactResponseEntity(), HttpStatus.CREATED);
        when(restTemplate.exchange(Matchers.anyString(), Matchers.any(HttpMethod.class), Matchers.any(), Matchers.<Class<Map>>any())).thenReturn(
                responseEntity);
        Map hubspotContactCreateResponse = hubspotServiceImpl.createHubspotContact(hubSpotContactDto);
        assert !hubspotContactCreateResponse.isEmpty() &&
               hubspotContactCreateResponse.get(TestConstants.HUBSPOT_RESPONSE_ID) == TestConstants.HUBSPOT_RESPONSE_ID_VALUE : "Quote created successfully";
    }

    @Test(expected = MalformedRequestException.class)
    public void testHubspotContactCreateFail() {
        HubSpotContactDto hubSpotContactDto = new HubSpotContactDto();
        ResponseEntity<Map> responseEntity = new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        when(restTemplate.exchange(Matchers.anyString(), Matchers.any(HttpMethod.class), Matchers.any(), Matchers.<Class<Map>>any())).thenReturn(
                responseEntity);
        hubspotServiceImpl.createHubspotContact(hubSpotContactDto);
    }
}
