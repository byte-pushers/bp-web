package software.bytepushers.bpweb.service.impl;

import com.google.gson.Gson;
import lombok.extern.log4j.Log4j2;
import org.apache.commons.lang3.StringUtils;
import org.apache.http.HttpHeaders;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import software.bytepushers.bpweb.constants.HubspotApiConstants;
import software.bytepushers.bpweb.exceptions.MalformedRequestException;
import software.bytepushers.bpweb.model.dto.*;
import software.bytepushers.bpweb.model.entity.Quote;
import software.bytepushers.bpweb.repository.QuoteRepository;
import software.bytepushers.bpweb.service.QuoteService;
import software.bytepushers.bpweb.utils.ApplicationUtils;

import javax.ws.rs.core.MediaType;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

/**
 * The service layer implementation for the quote operations.
 */
@Log4j2
@Service
public class QuoteServiceImpl implements QuoteService {

    private final QuoteRepository quoteRepository;
    @Value("${bp.web.hubspot.base.url:https://api.hubapi.com/crm/v3/objects}")
    String hubspotCreateBaseUrl;
    @Value("${bp.web.hubspot.developerKey}")
    String hubspotDeveloperKey;

    public QuoteServiceImpl(QuoteRepository quoteRepository) {
        this.quoteRepository = quoteRepository;
    }

    /**
     * {@inheritDoc}
     */
    @Override public Quote create(Quote quote) {
        log.info("Create quote");
        if (quote == null) {
            throw new MalformedRequestException(new ApiErrorResponse(ApiErrorResponse.FAILURE, StringUtils.EMPTY,
                                                                     new ApiValidationError(ApiConstants.ErrorEnum.QUOTE_EMPTY_ERROR,
                                                                                            Collections.singletonList(ApiConstants.QUOTE_FIELD))));
        }
        createHubspotEntities(quote);
        Quote createdQuote = this.quoteRepository.save(quote);
        log.info("Quote created");
        return createdQuote;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Quote update(Quote quote) {
        UUID quoteId = quote.getId();
        log.info("Update quote. Id: {}", quoteId);
        Quote existingQuote = this.quoteRepository.findByIdAndDisabledFalse(quoteId).orElseThrow(() -> new MalformedRequestException(
                new ApiErrorResponse(ApiErrorResponse.FAILURE, StringUtils.EMPTY,
                                     new ApiValidationError(ApiConstants.ErrorEnum.QUOTE_NOT_FOUND_TO_UPDATE, Collections.singletonList(ApiConstants.QUOTE_FIELD),
                                                        Collections.singletonList(quoteId.toString())))));
        ApplicationUtils.copyProperties(quote, existingQuote);
        Quote updatedQuote = this.quoteRepository.save(existingQuote);
        log.info("Quote updated");
        return updatedQuote;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Quote getById(UUID quoteId) {
        log.info("Get quote. Id: {}", quoteId);
        Optional<Quote> quoteOptional = this.quoteRepository.findByIdAndDisabledFalse(quoteId);
        if (quoteOptional.isEmpty()) {
            throw new MalformedRequestException(new ApiErrorResponse(ApiErrorResponse.FAILURE, StringUtils.EMPTY,
                                                                     new ApiValidationError(ApiConstants.ErrorEnum.QUOTE_NOT_FOUND_TO_SEARCH,
                                                                                        Collections.singletonList(ApiConstants.QUOTE_FIELD),
                                                                                        Collections.singletonList(quoteId.toString()))));
        }
        Quote quoteToReturn = quoteOptional.get();
        log.info("Quote found. Id: {}", quoteId);
        return quoteToReturn;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void delete(UUID quoteId) {
        log.info("Delete quote. Id: {}", quoteId);
        Optional<Quote> quoteOptional = this.quoteRepository.findByIdAndDisabledFalse(quoteId);
        if (quoteOptional.isEmpty()) {
            throw new MalformedRequestException(new ApiErrorResponse(ApiErrorResponse.FAILURE, StringUtils.EMPTY,
                                                                     new ApiValidationError(ApiConstants.ErrorEnum.QUOTE_NOT_FOUND_TO_DELETE,
                                                                                        Collections.singletonList(ApiConstants.QUOTE_FIELD),
                                                                                        Collections.singletonList(quoteId.toString()))));
        }
        Quote quoteToDelete = quoteOptional.get();
        quoteToDelete.setDisabled(true);
        this.quoteRepository.save(quoteToDelete);
        log.info("Quote deleted");
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public List<Quote> getAll() {
        log.info("Fetch. All quotes.");
        return this.quoteRepository.findAllByDisabledFalse();
    }


    public void createHubspotEntities(Quote quote) {
        Map<String, String> entityIdMap = new HashMap<>();
        try {
            entityIdMap = pushAllEntitiesToHubspot(quote);
            if (entityIdMap.size() == 4) {
                setHubspotIdsToQuote(entityIdMap, quote);
            } else {
                log.warn("All hubspot entities are not created : {}", entityIdMap);
                if (!entityIdMap.isEmpty()) {
                    log.info("All entities are not created successfully, hence deleting created entities {}", entityIdMap);
                    deleteHubspotEntity(entityIdMap);
                }
            }
        } catch (Exception e) {
            if (!entityIdMap.isEmpty()) {
                log.error("Exception occurred hence deleting created entities {}", e.getMessage());
                deleteHubspotEntity(entityIdMap);
            }
            log.error("Error occurred while create quote to hubspot, cause : {} and message : {}", e.getCause(), e.getMessage());
        }
    }

    private Map<String, String> pushAllEntitiesToHubspot(Quote quote) throws IOException {
        Map<String, String> entityIdMap = new HashMap<>();
        for (HubspotApiConstants.HubSpotAPI hubspotApi : HubspotApiConstants.HubSpotAPI.values()) {
            boolean isSuccess = generateHubspotEntityRequest(quote, hubspotApi, entityIdMap);
            if (!isSuccess) {
                if(!entityIdMap.isEmpty()) {
                    log.info("Failed to create {} entity, hence delete and stop ", hubspotApi.name());
                    deleteHubspotEntity(entityIdMap);
                    entityIdMap = new HashMap<>();
                }
                break;
            }
        }
        return entityIdMap;
    }

    private void setHubspotIdsToQuote(Map<String, String> entityIdMap, Quote quote) {
        quote.setHubspotQuoteId(entityIdMap.getOrDefault(HubspotApiConstants.HubSpotAPI.QUOTE.name(), StringUtils.EMPTY));
        quote.setHubspotDealId(entityIdMap.getOrDefault(HubspotApiConstants.HubSpotAPI.DEAL.name(), StringUtils.EMPTY));
        quote.setHubspotCompanyId(entityIdMap.getOrDefault(HubspotApiConstants.HubSpotAPI.COMPANY.name(), StringUtils.EMPTY));
        quote.setHubspotContactId(entityIdMap.getOrDefault(HubspotApiConstants.HubSpotAPI.CONTACT.name(), StringUtils.EMPTY));
    }

    public boolean generateHubspotEntityRequest(Quote quote, HubspotApiConstants.HubSpotAPI hubSpotAPI,
                                                Map<String, String> entityIdMap) throws IOException {
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
        String entityId = createHubspotEntity(hubspotCreateBaseUrl + "/" + hubSpotAPI.name().toLowerCase(), hubSpotRequest, hubSpotAPI);
        log.info("End generateHubspotEntityRequest for : {}, with entityIdMap : {}", hubSpotAPI.name(), entityIdMap);
        if (!StringUtils.isEmpty(entityId)) {
            entityIdMap.put(hubSpotAPI.name(), entityId);
            return true;
        }
        return false;
    }

    public String createHubspotEntity(String createHubspotEntityUrl, HubSpotRequest hubSpotRequest,
                                      HubspotApiConstants.HubSpotAPI hubSpotAPI) throws IOException {
        log.info("Started createHubspotEntity for : {}, url  : {}", hubSpotAPI.name(), createHubspotEntityUrl);
        String hubspotEntityId;
        try (CloseableHttpClient httpClient = HttpClients.createDefault()) {
            HttpPost httpPost = new HttpPost(createHubspotEntityUrl);

            Gson gson = new Gson();
            String jsonRequest = gson.toJson(hubSpotRequest);
            log.info("{} hubspot request to send : {}", hubSpotAPI.name(), jsonRequest);
            StringEntity hotspotQuoteEntity = new StringEntity(jsonRequest);
            httpPost.setEntity(hotspotQuoteEntity);
            httpPost.setHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON/*application/json;charset=utf-8*/);
            httpPost.setHeader(HttpHeaders.AUTHORIZATION, "Bearer " + hubspotDeveloperKey);
            HttpResponse response = httpClient.execute(httpPost);
            hubspotEntityId = getHubspotEntityId(response);
        }
        log.info("End createHubspotEntity with entityId : {} for {}", hubspotEntityId, hubSpotAPI.name());
        return hubspotEntityId;
    }

    public void deleteHubspotEntity(Map<String, String> entityIdMap) {
        log.info("Started deleteHubspotEntity for entityMap: {}", entityIdMap);
        try (CloseableHttpClient httpClient = HttpClients.createDefault()) {
            entityIdMap.forEach((k, v) -> {
                HttpDelete httpDelete = new HttpDelete(hubspotCreateBaseUrl + "/" + k.toLowerCase() + "/" + v);
                httpDelete.setHeader(HttpHeaders.AUTHORIZATION, "Bearer " + hubspotDeveloperKey);
                try {
                    HttpResponse response = httpClient.execute(httpDelete);
                    if (null != response) {
                        log.info("{} entity successfully delete having id {} with response {}", k, v, response.getStatusLine().getStatusCode());
                    } else {
                        log.warn("Issue to delete {} entity having id ", k, v);
                    }
                } catch (IOException e) {
                    log.error("Error occurred to delete {} having entityId {}", k, v);
                    log.error("Exception to delete entity {} ", e);
                }
            });
        } catch (IOException e) {
            log.error("Exception occurred to delete entity {}", e);
        }
        log.info("End deleteHubspotEntity ");
    }

    private HubSpotQuote preparedHubspotQuoteProperties(Quote quote) {
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
                    quote.getContact().getAddress().getStreet().size() > 1 ? quote.getContact().getAddress().getStreet().get(1) : StringUtils.EMPTY);
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

    private List<HubSpotAssociation> prepareHubspotAssociations(Map<String, String> entityIdMap) {
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

    private HubSpotContact prepareHubspotContactProperties(Quote quote) {
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

    private HubSpotCompany prepareHubspotCompanyProperties(Quote quote) {
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

    private HubSpotDeal prepareHubspotDealProperties(Quote quote) {
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
        hubSpotDeal.setCompany_foundation(
                StringUtils.isNumeric(quote.getCompany().getFoundation()) ? Integer.parseInt(quote.getCompany().getFoundation()) : 0);
        hubSpotDeal.setProject_plateform(quote.getProjectPlatform());
        hubSpotDeal.setProject_type(quote.getProjectType());
        log.info("End prepareHubspotDeal");
        return hubSpotDeal;
    }

    private String getHubspotEntityId(HttpResponse hubspotCreateEntityResponse) throws IOException {
        log.info("Started getHubspotEntityId");
        String hubspotEntityId = StringUtils.EMPTY;
        String strHubspotCreateQuoteResponse;

        if (null != hubspotCreateEntityResponse) {

            if (HttpStatus.SC_CREATED == hubspotCreateEntityResponse.getStatusLine().getStatusCode() ||
                HttpStatus.SC_OK == hubspotCreateEntityResponse.getStatusLine().getStatusCode()) {

                log.info("Entity successfully created to hubspot");

                strHubspotCreateQuoteResponse =
                        new String(hubspotCreateEntityResponse.getEntity().getContent().readAllBytes(), StandardCharsets.UTF_8);
                Map hubspotCreateQuoteResponseMap = new Gson().fromJson(strHubspotCreateQuoteResponse, Map.class);

                if (!hubspotCreateQuoteResponseMap.isEmpty() && hubspotCreateQuoteResponseMap.containsKey("id")) {
                    hubspotEntityId = (String) hubspotCreateQuoteResponseMap.get("id");
                } else {
                    log.warn("hubspotCreateQuoteResponseMap is empty or not found id from hubspot entity create request {} ",
                             strHubspotCreateQuoteResponse);
                }
            } else {
                log.warn("Entity is not successfully created to hubspot, status code : {}",
                         hubspotCreateEntityResponse.getStatusLine().getStatusCode());
            }
        } else {
            log.warn("Error occurred to create entity into hubspot, response is null");
        }
        log.info("End getHubspotEntityId, {}", hubspotEntityId);
        return hubspotEntityId;
    }

}
