package software.bytepushers.bpweb.controller;

import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import software.bytepushers.bpweb.model.dto.HubSpotContact;
import software.bytepushers.bpweb.model.dto.HubSpotContactDto;
import software.bytepushers.bpweb.service.HubspotService;

import javax.validation.Valid;
import java.util.Map;

/**
 * The rest endpoints for the hubspot operations.
 */
@Log4j2
@RestController
@RequestMapping("/api/v1/hubspot")
public class HubspotController extends AbstractController {

    private final HubspotService hubspotService;

    public HubspotController(HubspotService hubspotService) {
        this.hubspotService = hubspotService;
    }

    /**
     * The rest endpoint to create contact into hubspot
     *
     * @param hubSpotContactDto
     * @return
     */
    @PostMapping(path = "/contact")
    public ResponseEntity<?> createHubspotContact(@RequestBody @Valid HubSpotContactDto hubSpotContactDto){
        Map persistedHubspotContact = hubspotService.createHubspotContact(hubSpotContactDto);
        return sendResponse(persistedHubspotContact, HttpStatus.CREATED);
    }

}
