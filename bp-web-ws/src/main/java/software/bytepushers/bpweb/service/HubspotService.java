package software.bytepushers.bpweb.service;

import software.bytepushers.bpweb.model.entity.Quote;

/**
 * The service layer for the quote.
 */
public interface HubspotService {
    Quote createHubspotEntities(Quote quote);
}
