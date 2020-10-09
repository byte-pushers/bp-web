package software.bytepushers.bpweb.service;

import software.bytepushers.bpweb.model.dto.QuoteDto;

/**
 * The service layer for the quote.
 */
public interface QuoteService {

    /**
     * The method implementation is responsible for creating the quote into the system.
     *
     * @param quote to create
     * @return the created quote details.
     */
    QuoteDto create(QuoteDto quote);

}
