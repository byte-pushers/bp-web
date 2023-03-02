package software.bytepushers.bpweb.model.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
import java.util.List;

@Getter
@Setter
@ToString
public class HubSpotAssociation implements Serializable {
    private HubSpotId to;
    private List<HubSpotType> types;
}
