package software.bytepushers.bpweb.service.impl;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import software.bytepushers.bpweb.exceptions.MalformedRequestException;
import software.bytepushers.bpweb.model.dto.QuoteDto;
import software.bytepushers.bpweb.model.entity.Quote;
import software.bytepushers.bpweb.repository.QuoteRepository;
import software.bytepushers.bpweb.service.QuoteService;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

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

    /**
     * {@inheritDoc}
     */
    @Override
    public QuoteDto update(QuoteDto quoteDto) {
        UUID quoteId = quoteDto.getId();
        log.info("Update quote. Id: {}", quoteId);
        Optional<Quote> quoteOptional = this.quoteRepository.findByIdAndDisabledFalse(quoteId);
        if (quoteOptional.isEmpty()) {
            throw new MalformedRequestException("Quote not found");
        }
        Quote quoteToUpdate = quoteOptional.get();
        copyProperties(quoteDto, quoteToUpdate);
        Quote updatedQuote = this.quoteRepository.save(quoteToUpdate);
        log.info("Quote updated");
        return copyProperties(updatedQuote, QuoteDto.class);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public QuoteDto getById(UUID quoteId) {
        log.info("Get quote. Id: {}", quoteId);
        Optional<Quote> quoteOptional = this.quoteRepository.findByIdAndDisabledFalse(quoteId);
        if (quoteOptional.isEmpty()) {
            throw new MalformedRequestException("Quote not found");
        }
        Quote quoteToReturn = quoteOptional.get();
        log.info("Quote found. Id: {}", quoteId);
        return copyProperties(quoteToReturn, QuoteDto.class);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void delete(UUID quoteId) {
        log.info("Delete quote. Id: {}", quoteId);
        Optional<Quote> quoteOptional = this.quoteRepository.findByIdAndDisabledFalse(quoteId);
        if (quoteOptional.isEmpty()) {
            throw new MalformedRequestException("Quote not found to delete");
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
    public List<QuoteDto> getAll() {
        log.info("Fetch. All quotes.");
        List<Quote> quotes = this.quoteRepository.findAllByDisabledFalse();
        return quotes.stream().map(quote -> copyProperties(quote, QuoteDto.class)).collect(Collectors.toList());
    }

}
