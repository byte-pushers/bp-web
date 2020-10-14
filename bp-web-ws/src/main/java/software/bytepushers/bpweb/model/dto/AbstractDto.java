package software.bytepushers.bpweb.model.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

/**
 * The common dto model.
 */
@Getter
@Setter
public class AbstractDto {

    private UUID id;

    public interface CreateRequest {
    }

    public interface UpdateRequest {
    }

}
