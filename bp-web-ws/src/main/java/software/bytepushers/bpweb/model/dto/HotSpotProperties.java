package software.bytepushers.bpweb.model.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class HotSpotProperties implements Serializable {
    private HotSpotQuote properties;
}
