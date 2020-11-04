package software.bytepushers.bpweb.service;

import software.bytepushers.bpweb.model.entity.Quote;

import java.util.List;
import java.util.UUID;

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
    Quote create(Quote quote);

    /**
     * The method implementation is responsible for updating the quote based on provided details
     *
     * @param quote to update
     * @return the updated quote details
     */
    Quote update(Quote quote);

    /**
     * The method implementation is responsible for returning the quote details based on the id.
     *
     * @param quoteId to return the details of quote
     * @return the quote details
     */
    Quote getById(UUID quoteId);

    /**
     * The method implementation is responsible deleting the quote details based on the id.
     *
     * @param quoteId to delete
     */
    void delete(UUID quoteId);

    /**
     * The method implementation is responsible for fetching the all available quote details.
     *
     * @return the list of quote details
     */
    List<Quote> getAll();
}
