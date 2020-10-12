package software.bytepushers.bpweb.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import software.bytepushers.bpweb.model.dto.ApiResponse;

/**
 * The abstract controller for general implementation for all controllers
 */
public abstract class AbstractController {

    public ResponseEntity<?> sendResponse(Object data, HttpStatus status) {
        ApiResponse response = new ApiResponse(data, status);
        return new ResponseEntity<>(response, response.getStatus());
    }

    public ResponseEntity<?> sendResponse(Object data) {
        ApiResponse response = new ApiResponse(data);
        return new ResponseEntity<>(response, response.getStatus());
    }

}
