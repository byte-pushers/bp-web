package software.bytepushers.bpweb.controller;

import org.hibernate.validator.internal.engine.ConstraintViolationImpl;
import org.junit.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import software.bytepushers.bpweb.exceptions.MalformedRequestException;
import software.bytepushers.bpweb.model.dto.ApiResponse;
import software.bytepushers.bpweb.model.dto.ApiErrorResponse;
import software.bytepushers.bpweb.model.entity.Quote;
import software.bytepushers.bpweb.service.QuoteService;
import software.bytepushers.bpweb.utils.ModelUtils;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.util.Collections;
import java.util.UUID;

import static java.util.Collections.emptyMap;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

/**
 * The test case implementation fro the quotes
 */
public class QuoteControllerTest extends AbstractControllerTest {

    private final static String QUOTE_ENDPOINT = "/api/v1/quotes";

    @MockBean
    private QuoteService quoteServiceImpl;

    /**
     * The test case implementation is responsible for validating the fetching operation of quote.
     *
     * @throws Exception if something went wrong on request mapping.
     */
    @Test
    public void testGetAll() throws Exception {
        Quote quote = ModelUtils.quoteEntity();
        Mockito.when(this.quoteServiceImpl.getAll()).thenReturn(Collections.singletonList(quote));
        MockHttpServletResponse response = mvc.perform(get(QUOTE_ENDPOINT)
                .contentType(MediaType.APPLICATION_JSON)).andReturn().getResponse();
        assert response.getStatus() == HttpStatus.OK.value() : "Get all endpoint must return the ok status";
        ApiResponse apiResponse = this.objectMapper.readValue(response.getContentAsString(), ApiResponse.class);
        assert apiResponse != null && apiResponse.getData() != null : "All quotes must be return with valid data";
    }

    /**
     * The test case implementation is responsible for validating the case while incorrect endpoint is hit by the end user.
     *
     * @throws Exception if something went wrong on request mapping.
     */
    @Test
    public void testGetAllQuoteWithWrongEndpointRequest() throws Exception {
        Quote quote = ModelUtils.quoteEntity();
        Mockito.when(this.quoteServiceImpl.getAll()).thenReturn(Collections.singletonList(quote));
        MockHttpServletResponse response = mvc.perform(get(QUOTE_ENDPOINT.concat("invalid"))
                .contentType(MediaType.APPLICATION_JSON)).andReturn().getResponse();
        assert response.getStatus() == HttpStatus.NOT_FOUND.value() : "Incorrect endpoint won't acceptable";
    }

    /**
     * The test case implementation is responsible for validating the create/save/add rest operation
     * of the quote with request mapping.
     *
     * @throws Exception if something went wrong on request mapping.
     */
    @Test
    public void createQuoteTest() throws Exception {
        Quote quote = ModelUtils.quoteEntity();
        String requestBody = this.objectMapper.writeValueAsString(quote);
        Mockito.when(this.quoteServiceImpl.create(Mockito.any())).thenReturn(quote);
        MockHttpServletResponse response = mvc.perform(post(QUOTE_ENDPOINT)
                .contentType(MediaType.APPLICATION_JSON).content(requestBody)).andReturn().getResponse();
        assert response.getStatus() == HttpStatus.CREATED.value() : "Quote must be created with valid" +
                " data and return the created quote details";
    }

    /**
     * The test case implementation is responsible for validating the create/save/add rest operation
     * of the quote with missing request body.
     *
     * @throws Exception if something went wrong on request mapping.
     */
    @Test
    public void createQuoteWithMissingRequestTest() throws Exception {
        Quote quote = ModelUtils.quoteEntity();
        quote.setCompany(null);
        quote.setContact(null);
        String requestBody = this.objectMapper.writeValueAsString(quote);
        Mockito.when(this.quoteServiceImpl.create(Mockito.any())).thenReturn(quote);
        MockHttpServletResponse response = mvc.perform(post(QUOTE_ENDPOINT)
                .contentType(MediaType.APPLICATION_JSON).content(requestBody)).andReturn().getResponse();
        assert response.getStatus() == HttpStatus.BAD_REQUEST.value() : "Missing data must be thrown as bad request";
        ApiErrorResponse apiResponse = this.objectMapper.readValue(response.getContentAsString(), ApiErrorResponse.class);
        assert apiResponse.getErrors().size() == 2 : "Missing data must be thrown with validation message";
    }

    /**
     * The test case implementation is responsible for validating the create/save/add rest operation
     * of the quote with invalid request body.
     *
     * @throws Exception if something went wrong on request mapping.
     */
    @Test
    public void createQuoteWithInvalidRequestTest() throws Exception {
        Quote quote = ModelUtils.quoteEntity();
        quote.getContact().setEmail("invalid email");
        String requestBody = this.objectMapper.writeValueAsString(quote);
        Mockito.when(this.quoteServiceImpl.create(Mockito.any())).thenReturn(quote);
        MockHttpServletResponse response = mvc.perform(post(QUOTE_ENDPOINT)
                .contentType(MediaType.APPLICATION_JSON).content(requestBody)).andReturn().getResponse();
        assert response.getStatus() == HttpStatus.BAD_REQUEST.value() : "Invalid data must be thrown as bad request";
        ApiErrorResponse apiResponse = this.objectMapper.readValue(response.getContentAsString(), ApiErrorResponse.class);
        assert apiResponse.getErrors().size() == 1 : "Only invalid data must be thrown with validation message";
    }

    /**
     * The test case implementation is responsible for validating the update rest operation
     * of the quote with invalid request body.
     *
     * @throws Exception if something went wrong on request mapping.
     */
    @Test
    public void updateQuoteSuccessTest() throws Exception {
        Quote quote = ModelUtils.quoteEntity();
        quote.setId(UUID.randomUUID());
        String requestBody = this.objectMapper.writeValueAsString(quote);
        Mockito.when(this.quoteServiceImpl.update(Mockito.any())).thenReturn(quote);
        MockHttpServletResponse response = mvc.perform(put(QUOTE_ENDPOINT)
                .contentType(MediaType.APPLICATION_JSON).content(requestBody)).andReturn().getResponse();
        assert response.getStatus() == HttpStatus.OK.value() : "Quote must be updated successfully";
        ApiResponse apiResponse = this.objectMapper.readValue(response.getContentAsString(), ApiResponse.class);
        assert apiResponse.getData() != null : "Update request must be return the updated data.";
    }

    /**
     * The test case implementation is responsible for validating the update rest operation
     * of the quote with missing id of the quote.
     *
     * @throws Exception if something went wrong on request mapping.
     */
    @Test
    public void updateQuoteWhileMissingIdTest() throws Exception {
        Quote quote = ModelUtils.quoteEntity();
        String requestBody = this.objectMapper.writeValueAsString(quote);
        Mockito.when(this.quoteServiceImpl.update(Mockito.any())).thenReturn(quote);
        MockHttpServletResponse response = mvc.perform(put(QUOTE_ENDPOINT)
                .contentType(MediaType.APPLICATION_JSON).content(requestBody)).andReturn().getResponse();
        assert response.getStatus() == HttpStatus.BAD_REQUEST.value() : "Quote must be thrown as a bad request";
        ApiErrorResponse apiResponse = this.objectMapper.readValue(response.getContentAsString(), ApiErrorResponse.class);
        assert apiResponse.getErrors().size() == 1 : "Missing id error must be thrown";
    }

    /**
     * The test case implementation is responsible for validating the update rest operation
     * of the quote with missing data of the quote. It should just ignore those fields which are not supplied.
     *
     * @throws Exception if something went wrong on request mapping.
     */
    @Test
    public void updateQuoteWhileMissingDataTest() throws Exception {
        Quote quote = ModelUtils.quoteEntity();
        quote.setId(UUID.randomUUID());
        quote.setContact(null);
        quote.setCompany(null);
        String requestBody = this.objectMapper.writeValueAsString(quote);
        Mockito.when(this.quoteServiceImpl.update(Mockito.any())).thenReturn(quote);
        MockHttpServletResponse response = mvc.perform(put(QUOTE_ENDPOINT)
                .contentType(MediaType.APPLICATION_JSON).content(requestBody)).andReturn().getResponse();
        assert response.getStatus() == HttpStatus.OK.value() : "Quote must be updated successfully";
        ApiResponse apiResponse = this.objectMapper.readValue(response.getContentAsString(), ApiResponse.class);
        assert apiResponse.getData() != null : "Update request must skip the null fields to update.";
    }

    /**
     * The test case implementation is responsible for validating the update rest operation
     * of the quote with invalid data.
     *
     * @throws Exception if something went wrong on request mapping.
     */
    @Test
    public void updateQuoteWithInvalidRequestTest() throws Exception {
        Quote quote = ModelUtils.quoteEntity();
        quote.setId(UUID.randomUUID());
        quote.getContact().setEmail("invalid email");
        String requestBody = this.objectMapper.writeValueAsString(quote);
        Mockito.when(this.quoteServiceImpl.create(Mockito.any())).thenReturn(quote);
        MockHttpServletResponse response = mvc.perform(put(QUOTE_ENDPOINT)
                .contentType(MediaType.APPLICATION_JSON).content(requestBody)).andReturn().getResponse();
        assert response.getStatus() == HttpStatus.BAD_REQUEST.value() : "Invalid data must be thrown as bad request";
        ApiErrorResponse apiResponse = this.objectMapper.readValue(response.getContentAsString(), ApiErrorResponse.class);
        assert apiResponse.getErrors().size() == 1 : "Only invalid data must be thrown with validation message";
    }

    /**
     * The test case implementation is responsible for validating the get by id rest operation
     * of the quote.
     *
     * @throws Exception if something went wrong on request mapping.
     */
    @Test
    public void getByIdQuoteTest() throws Exception {
        Quote quote = ModelUtils.quoteEntity();
        Mockito.when(this.quoteServiceImpl.getById(Mockito.any())).thenReturn(quote);
        MockHttpServletResponse response = mvc.perform(get(QUOTE_ENDPOINT + "/" + UUID.randomUUID().toString())
                .contentType(MediaType.APPLICATION_JSON)).andReturn().getResponse();
        assert response.getStatus() == HttpStatus.OK.value() : "Valid ID request must return data with status ok";
        ApiResponse apiResponse = this.objectMapper.readValue(response.getContentAsString(), ApiResponse.class);
        assert apiResponse.getData() != null : "Valid id must return the quote details.";
    }

    /**
     * The test case implementation is responsible for validating the get by id rest operation
     * of the quote with invalid quote if.
     *
     * @throws Exception if something went wrong on request mapping.
     */
    @Test
    public void getByIdQuoteTestWithInvalidId() throws Exception {
        Quote quote = ModelUtils.quoteEntity();
        Mockito.when(this.quoteServiceImpl.getById(Mockito.any())).thenReturn(quote);
        MockHttpServletResponse response = mvc.perform(get(QUOTE_ENDPOINT + "/invalidId")
                .contentType(MediaType.APPLICATION_JSON)).andReturn().getResponse();
        assert response.getStatus() == HttpStatus.BAD_REQUEST.value() : "Invalid ID request must thrown as bad request";
    }

    /**
     * The test case implementation is responsible for validating the get by id rest operation
     * of the quote while quote is nto found with specified id invalid quote if.
     *
     * @throws Exception if something went wrong on request mapping.
     */
    @Test
    public void getByIdQuoteTestWhileQuoteNotFound() throws Exception {
        Mockito.when(this.quoteServiceImpl.getById(Mockito.any())).thenThrow(new MalformedRequestException());
        MockHttpServletResponse response = mvc.perform(get(QUOTE_ENDPOINT + "/" + UUID.randomUUID().toString())
                .contentType(MediaType.APPLICATION_JSON)).andReturn().getResponse();
        assert response.getStatus() == HttpStatus.BAD_REQUEST.value() : "Quote not found must be thrown as bad request";
    }

    /**
     * The test case implementation is responsible for validating the delete by id rest operation
     * of the quote.
     *
     * @throws Exception if something went wrong on request mapping.
     */
    @Test
    public void deleteByIdQuoteTest() throws Exception {
        UUID quoteId = UUID.randomUUID();
        MockHttpServletResponse response = mvc.perform(delete(QUOTE_ENDPOINT + "/" + quoteId.toString())
                .contentType(MediaType.APPLICATION_JSON)).andReturn().getResponse();
        assert response.getStatus() == HttpStatus.OK.value() : "Quote must be deleted.";
    }

    /**
     * The test case implementation is responsible for validating the delete by id rest operation
     * of the quote with invalid quote if.
     *
     * @throws Exception if something went wrong on request mapping.
     */
    @Test
    public void deleteByIdQuoteTestWithInvalidId() throws Exception {
        Quote quote = ModelUtils.quoteEntity();
        Mockito.when(this.quoteServiceImpl.getById(Mockito.any())).thenReturn(quote);
        MockHttpServletResponse response = mvc.perform(delete(QUOTE_ENDPOINT + "/invalidId")
                .contentType(MediaType.APPLICATION_JSON)).andReturn().getResponse();
        assert response.getStatus() == HttpStatus.BAD_REQUEST.value() : "Invalid ID request must thrown as bad request";
    }

    /**
     * The test case implementation is responsible for calidating the database errors handling process.
     *
     * @throws Exception if something went wrong on request mapping.
     */
    @Test
    public void testUserByIdEndpointWithDatabaseConstraintsError() throws Exception {
        ConstraintViolation<Object> message = ConstraintViolationImpl.forBeanValidation("message.template",
                emptyMap(), emptyMap(), "Invalid query", Object.class, null, null, null, null, null, null);
        UUID quoteId = UUID.randomUUID();
        Mockito.when(this.quoteServiceImpl.getById(Mockito.any())).thenThrow(new ConstraintViolationException(Collections.singleton(message)));
        MockHttpServletResponse response = mvc.perform(get(QUOTE_ENDPOINT + "/" + quoteId.toString())
                .contentType(MediaType.APPLICATION_JSON)).andReturn().getResponse();
        assert response.getStatus() == HttpStatus.BAD_REQUEST.value() : "Database constraints error must be thrown as Bad Request.";
    }
}
