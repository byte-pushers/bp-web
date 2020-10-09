package software.bytepushers.bpweb.service.impl;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import software.bytepushers.bpweb.model.dto.QuoteDto;
import software.bytepushers.bpweb.model.entity.Quote;
import software.bytepushers.bpweb.repository.QuoteRepository;
import software.bytepushers.bpweb.service.QuoteService;

import static software.bytepushers.bpweb.utils.ApplicationUtils.copyProperties;

/**
 * The service layer implementation for the quote operations.
 */
@Log4j2
@Service
public class QuoteServiceImpl implements QuoteService {

    private final QuoteRepository quoteRepository;

    public QuoteServiceImpl(QuoteRepository quoteRepository) {
        this.quoteRepository = quoteRepository;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public QuoteDto create(QuoteDto quoteDto) {
        log.info("Create quote");
        Quote quote = copyProperties(quoteDto, Quote.class);
        Quote createdQuote = this.quoteRepository.save(quote);
        log.info("Quote created");
        return copyProperties(createdQuote, QuoteDto.class);
    }
}
