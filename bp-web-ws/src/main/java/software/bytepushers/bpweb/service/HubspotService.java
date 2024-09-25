package software.bytepushers.bpweb.service;

import software.bytepushers.bpweb.model.dto.HubSpotContactDto;
import software.bytepushers.bpweb.model.entity.Quote;

import java.util.Map;

/**
 * The service layer for the quote.
 */
public interface HubspotService {
    Quote createHubspotEntities(Quote quote);
    Map createHubspotContact(HubSpotContactDto hubSpotContactDto);
}
