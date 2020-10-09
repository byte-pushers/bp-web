package software.bytepushers.bpweb.controller;

import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import software.bytepushers.bpweb.model.dto.QuoteDto;
import software.bytepushers.bpweb.service.QuoteService;

import javax.validation.Valid;

/**
 * The rest endpoints for the quotes operations.
 */
@Log4j2
@RestController
@RequestMapping("/api/v1/quotes")
public class QuoteController extends AbstractController {

    private final QuoteService quoteServiceImpl;

    public QuoteController(QuoteService quoteServiceImpl) {
        this.quoteServiceImpl = quoteServiceImpl;
    }

    /**
     * The rest endpoint implementation to create the quote.
     *
     * @param quote to create
     * @return the created quote.
     */
    @PostMapping
    public ResponseEntity<?> create(@RequestBody @Valid QuoteDto quote) {
        log.info("Request to create quote");
        QuoteDto createdQuote = this.quoteServiceImpl.create(quote);
        log.info("Create quote request served successfully");
        return sendResponse(createdQuote, HttpStatus.CREATED);
    }
}
