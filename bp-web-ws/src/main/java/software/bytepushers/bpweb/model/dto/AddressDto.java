package software.bytepushers.bpweb.model.dto;

import lombok.*;

import javax.validation.constraints.NotEmpty;
import java.util.List;

/**
 * The address dto model.
 */
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AddressDto extends AbstractDto {

    @NotEmpty(groups = CreateRequest.class, message = "{person.address.street1.required}")
    private List<String> street;

    @NotEmpty(groups = CreateRequest.class, message = "{person.address.city.required}")
    private String city;

    @NotEmpty(groups = CreateRequest.class, message = "{person.address.state.required}")
    private String state;

    @NotEmpty(groups = CreateRequest.class, message = "{person.address.zip.required}")
    private String zip;

    @NotEmpty(groups = CreateRequest.class, message = "{person.address.country.required}")
    private String country;

    @NotEmpty(groups = CreateRequest.class, message = "{person.address.county.required}")
    private String county;
}
