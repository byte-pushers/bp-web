package software.bytepushers.bpweb.model.dto;

import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

/**
 * The person dto model.
 */
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PersonDto extends AbstractDto {

    @NotEmpty(groups = CreateRequest.class, message = "{person.firstname.required}")
    private String firstName;

    @NotEmpty(groups = CreateRequest.class, message = "{person.lastname.required}")
    private String lastName;

    @NotEmpty(groups = CreateRequest.class, message = "{person.email.required}")
    @Email(groups = {CreateRequest.class, UpdateRequest.class}, message = "{person.email.invalid}")
    private String email;

    @NotNull(groups = CreateRequest.class, message = "{person.phone.required}")
    private PhoneDto phone;

    @NotNull(groups = CreateRequest.class, message = "{person.address.details.required}")
    private AddressDto address;

}
