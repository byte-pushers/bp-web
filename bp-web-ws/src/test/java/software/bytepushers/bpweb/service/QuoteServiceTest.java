package software.bytepushers.bpweb.service;

import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import software.bytepushers.bpweb.exceptions.MalformedRequestException;
import software.bytepushers.bpweb.model.entity.Company;
import software.bytepushers.bpweb.model.entity.Person;
import software.bytepushers.bpweb.model.entity.Quote;
import software.bytepushers.bpweb.repository.QuoteRepository;
import software.bytepushers.bpweb.service.impl.QuoteServiceImpl;
import software.bytepushers.bpweb.utils.ModelUtils;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 * The quote service test cases
 */
@ExtendWith(SpringExtension.class)
public class QuoteServiceTest {

    @Mock
    private QuoteRepository quoteRepository;

    @InjectMocks
    private QuoteServiceImpl quoteServiceImpl;

    @Before
    public void before() {
        MockitoAnnotations.initMocks(this);
    }

    /**
     * The test case implementation is responsible for validating the save operation of the quote service.
     */
    @Test
    public void testSaveQuote() {
        Quote quote = ModelUtils.quoteEntity();
        quote.setId(UUID.randomUUID());
        Mockito.when(quoteRepository.save(Mockito.any(Quote.class))).thenReturn(quote);
        Quote createdQuote = this.quoteServiceImpl.create(quote);
        assert createdQuote != null && createdQuote.getId() != null : "Quote must be created";
    }

    /**
     * The test case implementation is responsible for validating the null input of the save operation
     */
    @Test(expected = MalformedRequestException.class)
    public void testNullQuoteSave() {
        this.quoteServiceImpl.create(null);
    }

    /**
     * The test case implementation is responsible for validating the update operation of the quote service.
     */
    @Test
    public void testUpdateQuote() {
        Quote quote = ModelUtils.updateQuoteEntity();
        Mockito.when(quoteRepository.findByIdAndDisabledFalse(quote.getId())).thenReturn(Optional.of(quote));
        Mockito.when(quoteRepository.save(Mockito.any(Quote.class))).thenReturn(quote);
        Quote updatedQuote = this.quoteServiceImpl.update(quote);
        assert updatedQuote != null && quote.getId().equals(updatedQuote.getId()) : "Quote must be updated with correct details.";
        Company company = updatedQuote.getCompany();
        Person contact = updatedQuote.getContact();
        assert company != null : "Company details must be not null after updating the quote";
        assert contact != null : "Contact details must be not null after updating the quote";
        assert company.getName().equals(quote.getCompany().getName()) : "Company name must be updated as per provided name.";
    }

    /**
     * The test case implementation is responsible for validating
     * the update operation of the quote service while quote is not found.
     */
    @Test(expected = MalformedRequestException.class)
    public void testUpdateQuoteWhenQuoteNotFound() {
        Quote quote = ModelUtils.updateQuoteEntity();
        Mockito.when(this.quoteRepository.findByIdAndDisabledFalse(quote.getId())).thenReturn(Optional.empty());
        this.quoteServiceImpl.update(quote);
    }

    /**
     * The test case implementation is responsible for validating the delete operation
     * of the quote service.
     */
    @Test
    public void testDeleteQuote() {
        Quote quote = ModelUtils.quoteEntity();
        Mockito.when(quoteRepository.findByIdAndDisabledFalse(quote.getId())).thenReturn(Optional.of(quote));
        Mockito.when(quoteRepository.save(Mockito.any(Quote.class))).thenReturn(quote);
        this.quoteServiceImpl.delete(quote.getId());
        assert quote.isDisabled() : "Delete must be set the disabled flag as true for soft delete";
    }

    /**
     * The test case implementation is responsible for validating the delete operation
     * of the quote service while quote is not found.
     */
    @Test(expected = MalformedRequestException.class)
    public void testDeleteQuoteWhileNotFound() {
        UUID quoteId = UUID.randomUUID();
        Mockito.when(this.quoteRepository.findByIdAndDisabledFalse(quoteId)).thenReturn(Optional.empty());
        this.quoteServiceImpl.delete(quoteId);
    }

    /**
     * The test case implementation is responsible for validating the fetching all operation
     * of the quote service.
     */
    @Test
    public void testGetAllQuote() {
        Quote quote = ModelUtils.quoteEntity();
        Mockito.when(quoteRepository.findAllByDisabledFalse()).thenReturn(Collections.singletonList(quote));
        List<Quote> quotes = this.quoteServiceImpl.getAll();
        assert !quotes.isEmpty() : "Fetching all quotes must return all quotes";
    }

    /**
     * The test case implementation is responsible for validating the quote by fetching the id
     * of the quote service.
     */
    @Test
    public void testGetByIdQuote() {
        Quote quote = ModelUtils.updateQuoteEntity();
        Mockito.when(quoteRepository.findByIdAndDisabledFalse(quote.getId())).thenReturn(Optional.of(quote));
        Quote quoteById = this.quoteServiceImpl.getById(quote.getId());
        assert quoteById != null : "Quote must be retrieved by valid id";
    }

    /**
     * The test case implementation is responsible for validating the quote by fetching the
     * id of the quote service while quote is not found with specified id.
     */
    @Test(expected = MalformedRequestException.class)
    public void testGetByIdQuoteWhenQuoteNotFound() {
        Quote quote = ModelUtils.quoteEntity();
        Mockito.when(quoteRepository.findByIdAndDisabledFalse(quote.getId())).thenReturn(Optional.empty());
        this.quoteServiceImpl.getById(quote.getId());
    }
}
