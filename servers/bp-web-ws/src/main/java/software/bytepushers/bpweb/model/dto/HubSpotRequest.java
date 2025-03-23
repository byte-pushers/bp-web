package software.bytepushers.bpweb.model.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class HubSpotRequest<T> implements Serializable {
    private T properties;
    private List<HubSpotAssociation> associations = new ArrayList<>();
}
