package software.bytepushers.bpweb.model.dto;

import lombok.Getter;
import lombok.Setter;
import software.bytepushers.bpweb.model.dto.AbstractDto.CreateRequest;

import javax.validation.constraints.NotEmpty;

/**
 * The address dto model.
 */
@Getter
@Setter
public class AddressDto {

    @NotEmpty(groups = {CreateRequest.class}, message = "{person.address.street1.required}")
    private String street1;

    private String street2;

    @NotEmpty(groups = {CreateRequest.class}, message = "{person.address.city.required}")
    private String city;

    @NotEmpty(groups = {CreateRequest.class}, message = "{person.address.state.required}")
    private String state;

    @NotEmpty(groups = {CreateRequest.class}, message = "{person.address.zip.required}")
    private String zip;

    @NotEmpty(groups = {CreateRequest.class}, message = "{person.address.country.required}")
    private String country;
}
