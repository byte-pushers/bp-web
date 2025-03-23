package software.bytepushers.bpweb.model.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class HubSpotType implements Serializable {
    private String associationCategory;
    private Integer associationTypeId;
}
