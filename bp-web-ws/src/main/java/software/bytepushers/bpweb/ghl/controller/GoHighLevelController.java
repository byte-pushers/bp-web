package software.bytepushers.bpweb.ghl.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import software.bytepushers.bpweb.ghl.model.GoHighLevelContactRequestBody;

import javax.validation.Valid;

@RestController
@RequestMapping(path = "/api")
public class GoHighLevelController {
    public GoHighLevelController() {

    }

    @PostMapping(value = "/contacts", consumes = {"application/json"}, produces = {"application/json"})
    public ResponseEntity<?> createContact(@Valid @RequestBody GoHighLevelContactRequestBody newGoHighLevelContactRequestBody) {
        return new ResponseEntity<>(newGoHighLevelContactRequestBody, HttpStatus.CREATED);
    }
}
