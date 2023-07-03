package software.bytepushers.bpweb.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.log4j.Log4j2;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import software.bytepushers.bpweb.constants.HubspotApiConstants;
import software.bytepushers.bpweb.exceptions.MalformedRequestException;
import software.bytepushers.bpweb.model.dto.*;
import software.bytepushers.bpweb.model.entity.Quote;
import software.bytepushers.bpweb.service.HubspotService;
import software.bytepushers.bpweb.utils.ApplicationUtils;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

/**
 * The service layer implementation for the quote operations.
 */
@Log4j2
@Service
public class HubspotServiceImpl implements HubspotService {

    private final RestTemplate restTemplate;
    @Value("${bp.web.hubspot.base.url:https://api.hubapi.com12/crm/v3/objects}")
    String hubspotCreateBaseUrl;
    //private CloseableHttpClient httpClient ;
    @Value("${bp.web.hubspot.developerKey}")
    String hubspotDeveloperKey;

    public HubspotServiceImpl(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Override
    public Quote createHubspotEntities(Quote quote) {

        Map<String, String> entityIdMap = new HashMap<>();
        try {
            entityIdMap = pushAllEntitiesToHubspot(quote);
            if (entityIdMap.size() == 4) {
                setHubspotIdsToQuote(entityIdMap, quote);
            } else {
                log.warn("All hubspot entities are not created : {}", entityIdMap);
                if (!entityIdMap.isEmpty()) {
                    log.info("All entities are not created successfully, hence deleting created entities {}",
                            entityIdMap);
                    deleteHubspotEntity(entityIdMap);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            if (!entityIdMap.isEmpty()) {
                log.error("Exception occurred hence deleting created entities {}", e.getMessage());
                deleteHubspotEntity(entityIdMap);
            }
            log.error("Error occurred while create quote to hubspot, cause : {} and message : {}", e.getCause(),
                    e.getMessage());
        }

        return quote;
    }

    public Map<String, String> pushAllEntitiesToHubspot(Quote quote) {
        Map<String, String> entityIdMap = new HashMap<>();
        for (HubspotApiConstants.HubSpotAPI hubspotApi : HubspotApiConstants.HubSpotAPI.values()) {
            boolean isSuccess = generateHubspotEntityRequest(quote, hubspotApi, entityIdMap);
            if (!isSuccess) {
                if (!entityIdMap.isEmpty()) {
                    log.info("Failed to create {} entity, hence delete and stop ", hubspotApi.name());
                    deleteHubspotEntity(entityIdMap);
                    entityIdMap = new HashMap<>();
                }
                break;
            }
        }
        return entityIdMap;
    }

    public void setHubspotIdsToQuote(Map<String, String> entityIdMap, Quote quote) {
        quote.setHubspotQuoteId(
                entityIdMap.getOrDefault(HubspotApiConstants.HubSpotAPI.QUOTE.name(), StringUtils.EMPTY));
        quote.setHubspotDealId(entityIdMap.getOrDefault(HubspotApiConstants.HubSpotAPI.DEAL.name(), StringUtils.EMPTY));
        quote.setHubspotCompanyId(
                entityIdMap.getOrDefault(HubspotApiConstants.HubSpotAPI.COMPANY.name(), StringUtils.EMPTY));
        quote.setHubspotContactId(
                entityIdMap.getOrDefault(HubspotApiConstants.HubSpotAPI.CONTACT.name(), StringUtils.EMPTY));
    }

    public boolean generateHubspotEntityRequest(Quote quote, HubspotApiConstants.HubSpotAPI hubSpotAPI,
                                                Map<String, String> entityIdMap) {
        log.info("Started generateHubspotEntityRequest for : {} And entityIdMap : {}", hubSpotAPI.name(), entityIdMap);
        HubSpotRequest hubSpotRequest = new HubSpotRequest<>();
        switch (hubSpotAPI) {
            case CONTACT:
                hubSpotRequest.setProperties(prepareHubspotContactProperties(quote));
                break;
            case COMPANY:
                hubSpotRequest.setProperties(prepareHubspotCompanyProperties(quote));
                break;
            case DEAL:
                hubSpotRequest.setProperties(prepareHubspotDealProperties(quote));
                break;
            case QUOTE:
                if (entityIdMap.size() == 3) {
                    hubSpotRequest.setProperties(preparedHubspotQuoteProperties(quote));
                    hubSpotRequest.setAssociations(prepareHubspotAssociations(entityIdMap));
                } else {
                    log.warn("All entityIds are not getting stored to entityIdMap : {}", entityIdMap);
                }
                break;
            default:
                break;
        }
        String entityId = createHubspotEntity(hubSpotRequest, hubSpotAPI);
        log.info("End generateHubspotEntityRequest for : {}, with entityIdMap : {}", hubSpotAPI.name(), entityIdMap);
        if (!StringUtils.isEmpty(entityId)) {
            entityIdMap.put(hubSpotAPI.name(), entityId);
            return true;
        }
        return false;
    }

    public String createHubspotEntity(HubSpotRequest hubSpotRequest, HubspotApiConstants.HubSpotAPI hubSpotAPI) {
        log.info("Started createHubspotEntity ");
        try {
            ResponseEntity<Map> httpResponse = postHubspotEntityRequest(hubSpotRequest, hubSpotAPI);

           /* HttpHeaders headers = new HttpHeaders();
            headers.setAccept(List.of(MediaType.APPLICATION_JSON));
            headers.add(HttpHeaders.AUTHORIZATION, "Bearer " + hubspotDeveloperKey);
            HttpEntity<HubSpotRequest> entity = new HttpEntity<>(hubSpotRequest, headers);
            ResponseEntity<Map> httpResponse = restTemplate.exchange(url, HttpMethod.POST, entity, Map.class);*/

            if (HttpStatus.OK.value() == httpResponse.getStatusCodeValue() || HttpStatus.CREATED.value() == httpResponse.getStatusCodeValue()) {
                return !httpResponse.getBody().isEmpty() && httpResponse.getBody().containsKey("id") ? String.valueOf(
                        httpResponse.getBody().get("id")) : StringUtils.EMPTY;
            } else {
                log.warn("Failed to create entity, with statusCode : {} for entity : {}",
                        httpResponse.getStatusCodeValue(), hubSpotAPI.name());
                log.warn("Failed to create entity, with response : {} for entity: {}",
                        Objects.nonNull(httpResponse.getBody()) ? httpResponse.getBody() : "NA", hubSpotAPI.name());
            }
        } catch (Exception e) {
            log.error("Error: {} to create entity for : {}", e.getMessage(), hubSpotAPI.name());
        }
        return StringUtils.EMPTY;
    }

    public void deleteHubspotEntity(Map<String, String> entityIdMap) {
        log.info("Started deleteHubspotEntity for entityMap: {}", entityIdMap);

        try {
            HttpHeaders headers = new HttpHeaders();
            headers.add(HttpHeaders.AUTHORIZATION, "Bearer " + hubspotDeveloperKey);
            HttpEntity entity = new HttpEntity<>(headers);

            entityIdMap.forEach((k, v) -> {
                log.info("Entity delete start for: {} having value : {}", k, v);
                restTemplate.exchange(hubspotCreateBaseUrl + "/" + k.toLowerCase() + "/" + v, HttpMethod.DELETE, entity,
                        String.class);
            });
        } catch (Exception e) {
            log.error("Error: {} to delete entity", e.getMessage());
        }

        log.info("End deleteHubspotEntity ");
    }

    public HubSpotQuote preparedHubspotQuoteProperties(Quote quote) {
        log.info("Started preparedHubspotRequest");
        HubSpotQuote hubSpotQuote = new HubSpotQuote();

        LocalDateTime localDateTime = LocalDateTime.now().plusDays(1800);
        DateTimeFormatter formatterZonedDateTime = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
        String quoteExpiryDate = formatterZonedDateTime.format(localDateTime);

        hubSpotQuote.setHs_sender_company_name(quote.getCompany().getName());
        hubSpotQuote.setHs_title(quote.getCompany().getName() + "_Quote");
        hubSpotQuote.setHs_sender_company_domain(quote.getCompany().getUrl());
        hubSpotQuote.setHs_sender_phone(quote.getContact().getPhone().getNumber());
        if (!quote.getContact().getAddress().getStreet().isEmpty()) {
            hubSpotQuote.setHs_sender_company_address(quote.getContact().getAddress().getStreet().get(0));
            hubSpotQuote.setHs_sender_company_address2(
                    quote.getContact().getAddress().getStreet().size() > 1 ? quote.getContact().getAddress().getStreet()
                            .get(1) : StringUtils.EMPTY);
        }
        hubSpotQuote.setHs_sender_company_city(quote.getContact().getAddress().getCity());
        hubSpotQuote.setHs_sender_company_state(quote.getContact().getAddress().getState());
        hubSpotQuote.setHs_sender_company_zip(quote.getContact().getAddress().getZip());
        hubSpotQuote.setHs_sender_company_country(quote.getContact().getAddress().getCountry());
        hubSpotQuote.setHs_sender_firstname(quote.getContact().getFirstName());
        hubSpotQuote.setHs_sender_lastname(quote.getContact().getLastName());
        hubSpotQuote.setHs_sender_email(quote.getContact().getEmail());
        hubSpotQuote.setHs_comments(quote.getDescription());
        hubSpotQuote.setHs_expiration_date(quoteExpiryDate);
        hubSpotQuote.setHs_status("DRAFT");
        hubSpotQuote.setHs_language("en");
        log.info("End preparedHubspotRequest");
        return hubSpotQuote;
    }

    public List<HubSpotAssociation> prepareHubspotAssociations(Map<String, String> entityIdMap) {
        log.info("Started createAssociation");
        List<HubSpotAssociation> hubSpotAssociationList = new ArrayList<>();
        for (HubspotApiConstants.HubSpotAPI hubspotApi : HubspotApiConstants.HubSpotAPI.values()) {
            if (hubspotApi.equals(HubspotApiConstants.HubSpotAPI.QUOTE)) {
                log.info("Association not needed to add for quote");
                continue;
            }
            HubSpotId hubSpotId = new HubSpotId();
            hubSpotId.setId(Long.valueOf(entityIdMap.get(hubspotApi.name())));
            HubSpotType hubSpotType = new HubSpotType();
            hubSpotType.setAssociationCategory(HubspotApiConstants.HUBSPOT_DEFINED_CATEGORY);
            hubSpotType.setAssociationTypeId(hubspotApi.getAssociationTypeId());
            HubSpotAssociation hubSpotAssociation = new HubSpotAssociation();
            hubSpotAssociation.setTo(hubSpotId);
            hubSpotAssociation.setTypes(Collections.singletonList(hubSpotType));
            log.debug("Association details of  {} is {}", hubspotApi.name(), hubSpotAssociation);
            hubSpotAssociationList.add(hubSpotAssociation);
        }
        log.info("End createAssociation, with associations size : {}", hubSpotAssociationList.size());
        return hubSpotAssociationList;
    }

    public HubSpotContact prepareHubspotContactProperties(Quote quote) {
        log.info("Started prepareHubspotContact");
        HubSpotContact hubSpotContact = new HubSpotContact();
        hubSpotContact.setPhone(quote.getContact().getPhone().getNumber());
        hubSpotContact.setCity(quote.getContact().getAddress().getCity());
        if (!quote.getContact().getAddress().getStreet().isEmpty()) {
            hubSpotContact.setAddress(quote.getContact().getAddress().getStreet().get(0));
        }
        hubSpotContact.setState(quote.getContact().getAddress().getState());
        hubSpotContact.setZip(quote.getContact().getAddress().getZip());
        hubSpotContact.setCountry(quote.getContact().getAddress().getCountry());
        hubSpotContact.setFirstname(quote.getContact().getFirstName());
        hubSpotContact.setLastname(quote.getContact().getLastName());
        hubSpotContact.setEmail(quote.getContact().getEmail());
        hubSpotContact.setCompany(quote.getCompany().getName());
        hubSpotContact.setWebsite(quote.getCompany().getUrl());
        log.info("End prepareHubspotContact");
        return hubSpotContact;
    }

    public HubSpotCompany prepareHubspotCompanyProperties(Quote quote) {
        log.info("Started prepareHubspotCompany");
        HubSpotCompany hubSpotCompany = new HubSpotCompany();
        hubSpotCompany.setName(quote.getCompany().getName());
        hubSpotCompany.setWebsite(quote.getCompany().getUrl());
        hubSpotCompany.setFounded_year(String.valueOf(quote.getCompany().getEstablishedYear()));
        hubSpotCompany.setCity(quote.getContact().getAddress().getCity());
        hubSpotCompany.setZip(quote.getContact().getAddress().getZip());
        if (!quote.getContact().getAddress().getStreet().isEmpty()) {
            hubSpotCompany.setAddress(quote.getContact().getAddress().getStreet().get(0));
            if (quote.getContact().getAddress().getStreet().size() > 1) {
                hubSpotCompany.setAddress2(quote.getContact().getAddress().getStreet().get(1));
            }
        }
        hubSpotCompany.setState(quote.getContact().getAddress().getState());
        hubSpotCompany.setCountry(quote.getContact().getAddress().getCountry());
        hubSpotCompany.setOwneremail(quote.getContact().getEmail());
        log.info("End prepareHubspotCompany");
        return hubSpotCompany;
    }

    public HubSpotDeal prepareHubspotDealProperties(Quote quote) {
        log.info("Started prepareHubspotDeal");
        HubSpotDeal hubSpotDeal = new HubSpotDeal();
        hubSpotDeal.setAmount(quote.getCompany().getBudget().getMin());
        hubSpotDeal.setDealname("Deal from " + quote.getCompany().getName());
        hubSpotDeal.setProject_target_time_line_min(quote.getCompany().getTimeline().getMin());
        hubSpotDeal.setProject_target_time_line_max(quote.getCompany().getTimeline().getMax());
        hubSpotDeal.setProject_target_time_line_max_finite(quote.getCompany().getTimeline().getIsMaxFinite() ? 1 : 0);
        hubSpotDeal.setProject_budget_amount_min(quote.getCompany().getBudget().getMin());
        hubSpotDeal.setProject_budget_amount_max(quote.getCompany().getBudget().getMax());
        hubSpotDeal.setProject_budget_amount_max_finite(quote.getCompany().getBudget().getIsMaxFinite() ? 1 : 0);
        hubSpotDeal.setCompany_established(quote.getCompany().getIsEstablished() ? 1 : 0);
        hubSpotDeal.setCompany_established_year(quote.getCompany().getEstablishedYear());
        hubSpotDeal.setCompany_foundation(StringUtils.isNumeric(quote.getCompany().getFoundation()) ? Integer.parseInt(
                quote.getCompany().getFoundation()) : 0);
        hubSpotDeal.setProject_plateform(quote.getProjectPlatform());
        hubSpotDeal.setProject_type(quote.getProjectType());
        log.info("End prepareHubspotDeal");
        return hubSpotDeal;
    }

    @Override
    public Map createHubspotContact(HubSpotContactDto hubSpotContactDto) {
        log.info("Started createHubspotContact");
        HubSpotRequest<HubSpotContact> hubSpotRequest = new HubSpotRequest<>();
        hubSpotRequest.setProperties(preparedHubspotContact(hubSpotContactDto));

        ResponseEntity<Map> hubspotContactEntity = null;
        try {
            hubspotContactEntity = postHubspotEntityRequest(hubSpotRequest, HubspotApiConstants.HubSpotAPI.CONTACT);
            if (null != hubspotContactEntity && null != hubspotContactEntity.getBody()) {
                return hubspotContactEntity.getBody();
            } else {
                throw new Exception("Issue to create contact to hubspot");
            }
        } catch (HttpClientErrorException e) {
            if (e.getStatusCode().equals(HttpStatus.CONFLICT)) {
                try {
                    ObjectMapper mapper = new ObjectMapper();
                    Map contactDetails = mapper.readValue(e.getResponseBodyAsString(), Map.class);
                    if (contactDetails.containsKey("message")) {
                        String message = ((String) contactDetails.get("message"));
                        String hubspotId = message.substring(message.indexOf(":") + 1).trim();
                        log.info("Contact already exist with ID : {}", hubspotId);
                        ResponseEntity<Map> retrievedAlreadyExistingContact = getHubspotEntityRequest(
                                "contacts/" + hubspotId);
                        if (null != retrievedAlreadyExistingContact && retrievedAlreadyExistingContact.getStatusCode()
                                .equals(HttpStatus.OK)) {
                            return retrievedAlreadyExistingContact.getBody();
                        }
                    }
                } catch (Exception e1) {
                    log.error("Exception occurred to create contact to hubspot: {}", e);
                    throw new MalformedRequestException(
                            new ApiErrorResponse(ApiErrorResponse.FAILURE, StringUtils.EMPTY,
                                    new ApiValidationError(ApiConstants.ErrorEnum.HUBSPOT_CONTACT_CREATE_ISSUE,
                                            e1.getMessage(), e1.getMessage())));
                }
            }
            throw new MalformedRequestException(new ApiErrorResponse(ApiErrorResponse.FAILURE, StringUtils.EMPTY,
                    new ApiValidationError(ApiConstants.ErrorEnum.HUBSPOT_CONTACT_CREATE_ISSUE, e.getMessage(),
                            e.getMessage())));
        } catch (Exception e) {
            log.error("Exception occurred to create contact to hubspot: {}", e);
            throw new MalformedRequestException(new ApiErrorResponse(ApiErrorResponse.FAILURE, StringUtils.EMPTY,
                    new ApiValidationError(ApiConstants.ErrorEnum.HUBSPOT_CONTACT_CREATE_ISSUE, e.getMessage(),
                            e.getMessage())));
        }
    }

    public ResponseEntity<Map> postHubspotEntityRequest(HubSpotRequest hubSpotRequest,
                                                        HubspotApiConstants.HubSpotAPI hubSpotAPI) {

        String url = hubspotCreateBaseUrl + "/" + hubSpotAPI.name().toLowerCase();
        log.info("Started postHubspotEntityRequest for : {}, url  : {}", hubSpotAPI.name(), url);

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(List.of(MediaType.APPLICATION_JSON));
        headers.add(HttpHeaders.AUTHORIZATION, "Bearer " + hubspotDeveloperKey);
        HttpEntity<HubSpotRequest> entity = new HttpEntity<>(hubSpotRequest, headers);
        ResponseEntity<Map> httpResponse = restTemplate.exchange(url, HttpMethod.POST, entity, Map.class);

        log.info("End postHubspotEntityRequest for : {}, url  : {}", hubSpotAPI.name(), url);

        return httpResponse;
    }

    private HubSpotContact preparedHubspotContact(HubSpotContactDto hubSpotContactDto) {
        log.info("Started preparedHubspotContact");
        HubSpotContact hubSpotContact = new HubSpotContact();
        ApplicationUtils.copyProperties(hubSpotContactDto, hubSpotContact, "consent", "landingPageCategory");
        hubSpotContact.setHs_feedback_show_nps_web_survey(hubSpotContactDto.getConsent());
        hubSpotContact.setIndustry(hubSpotContactDto.getLandingPageCategory());

        log.info("End preparedHubspotContact with: {}", hubSpotContact);
        return hubSpotContact;
    }

    public ResponseEntity<Map> getHubspotEntityRequest(String endpoint) {

        String url = hubspotCreateBaseUrl + "/" + endpoint;
        log.info("Started getHubspotEntityRequest to retrieve details from : {}", url);

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(List.of(MediaType.APPLICATION_JSON));
        headers.add(HttpHeaders.AUTHORIZATION, "Bearer " + hubspotDeveloperKey);
        HttpEntity<HubSpotRequest> entity = new HttpEntity<>(headers);
        ResponseEntity<Map> httpResponse = restTemplate.exchange(url, HttpMethod.GET, entity, Map.class);

        log.info("End getHubspotEntityRequest with details from : {}", url);

        return httpResponse;
    }


 /*   public static void main(String[] args) {
        String message = "Contact already exists. Existing ID: 30801";
        message = message.substring(message.indexOf(":") + 1).trim();

        System.out.println("Message : "+message);
    }*/


}
