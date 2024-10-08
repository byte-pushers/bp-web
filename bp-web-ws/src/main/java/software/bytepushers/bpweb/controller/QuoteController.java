package software.bytepushers.bpweb.controller;

import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import software.bytepushers.bpweb.model.entity.Quote;
import software.bytepushers.bpweb.service.HubspotService;
import software.bytepushers.bpweb.service.QuoteService;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

/**
 * The rest endpoints for the quotes operations.
 */
@Log4j2
@RestController
@RequestMapping("/api/v1/quotes")
public class QuoteController extends AbstractController {

    private final QuoteService quoteServiceImpl;
    private final HubspotService hubspotServiceImpl;

    public QuoteController(QuoteService quoteServiceImpl, HubspotService hubspotServiceImpl) {
        this.quoteServiceImpl = quoteServiceImpl;
        this.hubspotServiceImpl = hubspotServiceImpl;
    }

    /**
     * The rest endpoint implementation to get all the details of quote.
     *
     * @return the all quote details.
     */
    @GetMapping
    public ResponseEntity<?> getAll() {
        log.info("Request to fetch all quotes");
        List<Quote> createdQuotes = this.quoteServiceImpl.getAll();
        log.info("All quotes fetched successfully");
        return sendOkResponse(createdQuotes);
    }

    /**
     * The rest endpoint implementation to create the quote.
     *
     * @param quote with details to create
     * @return the created quote details.
     */
    @PostMapping
    public ResponseEntity<?> create(@RequestBody @Valid Quote quote) {
        log.info("Request to create quote");
        quote = this.hubspotServiceImpl.createHubspotEntities(quote);
        Quote createdQuote = this.quoteServiceImpl.create(quote);
        log.info("Create quote request served successfully");
        return sendResponse(createdQuote, HttpStatus.CREATED);
    }

    /**
     * The rest endpoint implementation to create the quote.
     *
     * @param quote with details to update
     * @return the updated quote details.
     */
    @PutMapping
    public ResponseEntity<?> update(@RequestBody @Valid Quote quote) {
        log.info("Request to update quote");
        Quote updatedQuote = this.quoteServiceImpl.update(quote);
        log.info("Update quote request served successfully");
        return sendOkResponse(updatedQuote);
    }

    /**
     * The rest endpoint implementation to get the quote details.
     *
     * @param quoteId to get the quote details.
     * @return the quote details.
     */
    @GetMapping("/{quoteId}")
    public ResponseEntity<?> getQuote(@PathVariable UUID quoteId) {
        log.info("Request to get quote");
        Quote quote = this.quoteServiceImpl.getById(quoteId);
        log.info("Get quote request served successfully");
        return sendOkResponse(quote);
    }

    /**
     * The rest endpoint implementation to delete the quote.
     *
     * @param quoteId to delete the quote
     */
    @DeleteMapping("/{quoteId}")
    public ResponseEntity<?> delete(@PathVariable UUID quoteId) {
        log.info("Request to delete quote");
        this.quoteServiceImpl.delete(quoteId);
        log.info("Delete quote request served successfully");
        return sendOkResponse();
    }
}
