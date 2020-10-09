package software.bytepushers.bpweb.service;

import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import software.bytepushers.bpweb.exceptions.MalformedRequestException;
import software.bytepushers.bpweb.model.dto.QuoteDto;
import software.bytepushers.bpweb.model.entity.Quote;
import software.bytepushers.bpweb.repository.QuoteRepository;
import software.bytepushers.bpweb.service.impl.QuoteServiceImpl;
import software.bytepushers.bpweb.utils.ApplicationUtils;
import software.bytepushers.bpweb.utils.ModelUtils;

import java.util.UUID;

/**
 * The quote service test cases
 */
@ExtendWith(MockitoExtension.class)
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
        QuoteDto quoteDto = ModelUtils.quoteDto();
        Quote quote = ApplicationUtils.copyProperties(quoteDto, Quote.class);
        quote.setId(UUID.randomUUID());
        Mockito.when(quoteRepository.save(Mockito.any(Quote.class))).thenReturn(quote);
        QuoteDto createdQuote = this.quoteServiceImpl.create(quoteDto);
        assert createdQuote != null && createdQuote.getId() != null : "Quote must be created";
    }

    /**
     * The test case implementation is responsible for validating the null input of the save operation
     */
    @Test(expected = MalformedRequestException.class)
    public void testNullQuoteSave() {
        this.quoteServiceImpl.create(null);
    }
}
