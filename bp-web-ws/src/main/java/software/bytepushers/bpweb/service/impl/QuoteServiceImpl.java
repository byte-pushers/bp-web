package software.bytepushers.bpweb.service.impl;

import com.google.gson.Gson;
import lombok.extern.log4j.Log4j2;
import org.apache.commons.lang3.StringUtils;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import software.bytepushers.bpweb.exceptions.MalformedRequestException;
import software.bytepushers.bpweb.model.dto.*;
import software.bytepushers.bpweb.model.entity.Quote;
import software.bytepushers.bpweb.repository.QuoteRepository;
import software.bytepushers.bpweb.service.QuoteService;
import software.bytepushers.bpweb.utils.ApplicationUtils;

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
    @Value("${bp.web.hubspot.base.url:https://api.hubapi.com/}")
    private String hubspotBaseUrl;
    @Value("${bp.web.hubspot.create.quote:crm/v3/objects/quote}")
    private String hubspotCreateQuotePath;
    @Value("${bp.web.hubspot.developerKey}")
    private String hubspotDeveloperKey;

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
        try {
            String hubspotQuoteId = pushQuoteToHubspot(quote);
            quote.setHubspotQuoteId(hubspotQuoteId);
        } catch (IOException e) {
           log.error("Error occurred while create quote to hubspot : {}", e);
        }

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

    public String pushQuoteToHubspot(Quote quote) throws IOException {
        log.info("Started pushQuoteToHotspot");
        String hubspotQuoteId = StringUtils.EMPTY;

        try (CloseableHttpClient httpClient = HttpClients.createDefault()) {

            String hubspotQuoteUrl = hubspotBaseUrl + hubspotCreateQuotePath;
            HttpPost httpPost = new HttpPost(hubspotQuoteUrl);
            HotSpotProperties hotSpotProperties = new HotSpotProperties();
            hotSpotProperties.setProperties(preparedHubspotRequest(quote));
            Gson gson = new Gson();
            StringEntity hotspotQuoteEntity = new StringEntity(gson.toJson(hotSpotProperties));
            String hotspotRequest = new String(hotspotQuoteEntity.getContent().readAllBytes(), StandardCharsets.UTF_8);
            log.info("Request to be pushed to hotspot : {}", hotspotRequest);
            httpPost.setEntity(hotspotQuoteEntity);
            httpPost.setHeader("Content-type", "application/json;charset=utf-8");
            httpPost.setHeader("Authorization", "Bearer " + hubspotDeveloperKey);
            HttpResponse response = httpClient.execute(httpPost);
            hubspotQuoteId = getHubspotQuoteId(response);
        }

        log.info("End pushQuoteToHotspot");
        return hubspotQuoteId;
    }

    private HotSpotQuote preparedHubspotRequest(Quote quote) {
        log.info("Started preparedHubspotRequest");
        HotSpotQuote hotSpotQuote = new HotSpotQuote();

        LocalDateTime localDateTime = LocalDateTime.now().plusDays(1800);
        DateTimeFormatter formatterZonedDateTime = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
        String quoteExpiryDate = formatterZonedDateTime.format(localDateTime);

        //hotSpotQuote.setHs_quote_amount(quote.getCompany().getBudget().getMax());
        hotSpotQuote.setHs_sender_company_name(quote.getCompany().getName());
        hotSpotQuote.setHs_title(quote.getDescription());
        hotSpotQuote.setHs_sender_company_domain(quote.getCompany().getUrl());
        hotSpotQuote.setHs_sender_phone(quote.getContact().getPhone().getNumber());
        if (!quote.getContact().getAddress().getStreet().isEmpty()) {
            hotSpotQuote.setHs_sender_company_address(quote.getContact().getAddress().getStreet().get(0));
            hotSpotQuote.setHs_sender_company_address2(
                    quote.getContact().getAddress().getStreet().size() > 1 ? quote.getContact().getAddress().getStreet().get(1) : StringUtils.EMPTY);
        }
        hotSpotQuote.setHs_sender_company_city(quote.getContact().getAddress().getCity());
        hotSpotQuote.setHs_sender_company_state(quote.getContact().getAddress().getState());
        hotSpotQuote.setHs_sender_company_zip(quote.getContact().getAddress().getZip());
        hotSpotQuote.setHs_sender_company_country(quote.getContact().getAddress().getCountry());
        hotSpotQuote.setHs_sender_firstname(quote.getContact().getFirstName());
        hotSpotQuote.setHs_sender_lastname(quote.getContact().getLastName());
        hotSpotQuote.setHs_sender_email(quote.getContact().getEmail());
        hotSpotQuote.setHs_comments(quote.getDescription());
        hotSpotQuote.setHs_expiration_date(quoteExpiryDate);
        log.info("End preparedHubspotRequest");
        return hotSpotQuote;
    }

    private String getHubspotQuoteId(HttpResponse hubspotCreateQuoteResponseHttpResponse) throws IOException {
        log.info("Started getHubspotQuoteId");
        String hubspotQuoteId = StringUtils.EMPTY;
        String strHubspotCreateQuoteResponse = StringUtils.EMPTY;

        if (null != hubspotCreateQuoteResponseHttpResponse) {

            if (HttpStatus.SC_CREATED == hubspotCreateQuoteResponseHttpResponse.getStatusLine().getStatusCode() ||
                HttpStatus.SC_OK == hubspotCreateQuoteResponseHttpResponse.getStatusLine().getStatusCode()) {

                log.info("Quote successfully created to hubspot");

                strHubspotCreateQuoteResponse =
                        new String(hubspotCreateQuoteResponseHttpResponse.getEntity().getContent().readAllBytes(), StandardCharsets.UTF_8);
                Map hubspotCreateQuoteResponseMap = new Gson().fromJson(strHubspotCreateQuoteResponse, Map.class);

                if (!hubspotCreateQuoteResponseMap.isEmpty() && hubspotCreateQuoteResponseMap.containsKey("id")) {
                    hubspotQuoteId = (String) hubspotCreateQuoteResponseMap.get("id");
                }
            } else {
                log.warn("Quote is not successfully created to hubspot, failed with : {} and status code : {}", strHubspotCreateQuoteResponse,
                         hubspotCreateQuoteResponseHttpResponse.getStatusLine().getStatusCode());
            }
        } else {
            log.warn("Error occurred to create quote into hubspot, response is null");
        }
        log.info("End getHubspotQuoteId, {}", hubspotQuoteId);
        return hubspotQuoteId;
    }
}
