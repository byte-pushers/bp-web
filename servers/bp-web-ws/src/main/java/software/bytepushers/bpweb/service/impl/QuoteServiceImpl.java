package software.bytepushers.bpweb.service.impl;

import lombok.extern.log4j.Log4j2;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import software.bytepushers.bpweb.exceptions.MalformedRequestException;
import software.bytepushers.bpweb.model.dto.ApiConstants;
import software.bytepushers.bpweb.model.dto.ApiErrorResponse;
import software.bytepushers.bpweb.model.dto.ApiValidationError;
import software.bytepushers.bpweb.model.entity.Quote;
import software.bytepushers.bpweb.repository.QuoteRepository;
import software.bytepushers.bpweb.service.QuoteService;
import software.bytepushers.bpweb.utils.ApplicationUtils;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

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
    @Override public Quote create(Quote quote) {
        log.info("Create quote");
        if (quote == null) {
            throw new MalformedRequestException(new ApiErrorResponse(ApiErrorResponse.FAILURE, StringUtils.EMPTY,
                                                                     new ApiValidationError(ApiConstants.ErrorEnum.QUOTE_EMPTY_ERROR,
                                                                                            Collections.singletonList(ApiConstants.QUOTE_FIELD))));
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
}
