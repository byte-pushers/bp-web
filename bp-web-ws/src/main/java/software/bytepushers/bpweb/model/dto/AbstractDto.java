package software.bytepushers.bpweb.model.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.util.UUID;

/**
 * The common dto model.
 */
@Getter
@Setter
public class AbstractDto {

    @NotNull(groups = {UpdateRequest.class}, message = "{id.required}")
    private UUID id;

    public interface CreateRequest {
    }

    public interface UpdateRequest {
    }

}
