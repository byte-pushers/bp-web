package software.bytepushers.bpweb.model.dto;

import lombok.*;
import software.bytepushers.bpweb.model.dto.AbstractDto.CreateRequest;

import javax.validation.constraints.NotEmpty;

/**
 * The address dto model.
 */
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AddressDto {

    @NotEmpty(message = "{person.address.street1.required}")
    private String street1;

    private String street2;

    @NotEmpty(message = "{person.address.city.required}")
    private String city;

    @NotEmpty(message = "{person.address.state.required}")
    private String state;

    @NotEmpty(message = "{person.address.zip.required}")
    private String zip;

    @NotEmpty(message = "{person.address.country.required}")
    private String country;
}