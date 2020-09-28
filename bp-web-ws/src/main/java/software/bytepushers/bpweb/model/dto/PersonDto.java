package software.bytepushers.bpweb.model.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.Valid;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

/**
 * The person dto model.
 */
@Getter
@Setter
public class PersonDto extends AbstractDto {

    @NotEmpty(message = "{person.firstname.required}")
    private String firstName;

    @NotEmpty(message = "{person.lastname.required}")
    private String lastName;

    @NotEmpty(message = "{person.email.required}")
    @Email(message = "{person.email.invalid}")
    private String email;

    @NotEmpty(message = "{person.phone.required}")
    private String phone;

    @Valid
    @NotNull(message = "{person.address.details.required}")
    private AddressDto address;

}
