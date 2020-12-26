package software.bytepushers.bpweb.controller;

import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * The rest endpoints for the health endpoint.
 */
@Log4j2
@RestController
@RequestMapping("/api/v1/healt")
public class HealthController extends AbstractController {

    /**
     * Health endpoint implementation.
     *
     * @return the all quote details.
     */
    @GetMapping
    public ResponseEntity<?> getAll() {
        return sendOkResponse("Up and Running");
    }
}
