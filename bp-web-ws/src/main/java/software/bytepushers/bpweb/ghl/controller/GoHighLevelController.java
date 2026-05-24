package software.bytepushers.bpweb.ghl.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import software.bytepushers.bpweb.ghl.model.BPGoHighLevelContactResponseBody;
import software.bytepushers.bpweb.ghl.model.BPGoHighLevelContactRequestBody;
import software.bytepushers.bpweb.ghl.service.GoHighLevelContactService;

import javax.validation.Valid;

@RestController
@RequestMapping(path = "/api/ghl")
public class GoHighLevelController {
    private final GoHighLevelContactService ghlContactService;

    public GoHighLevelController(GoHighLevelContactService ghlContactService) {
        this.ghlContactService = ghlContactService;
    }

    @PostMapping(value = "/contacts", consumes = {"application/json"}, produces = {"application/json"})
    public ResponseEntity<?> createContact(@Valid @RequestBody BPGoHighLevelContactRequestBody newBPGoHighLevelContactRequestBody) {
        BPGoHighLevelContactResponseBody bpGHLContactResponseBody = ghlContactService.createContact(newBPGoHighLevelContactRequestBody);
        return new ResponseEntity<>(bpGHLContactResponseBody, HttpStatus.CREATED);
    }
}
