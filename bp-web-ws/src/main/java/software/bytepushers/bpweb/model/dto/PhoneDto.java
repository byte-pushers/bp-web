package software.bytepushers.bpweb.model.dto;

import lombok.*;

import javax.validation.constraints.NotEmpty;

/**
 * The phone dto model.
 */
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PhoneDto extends AbstractDto {

    @NotEmpty(groups = CreateRequest.class, message = "{person.firstname.required}")
    private String number;

    @NotEmpty(groups = CreateRequest.class, message = "{person.lastname.required}")
    private String type;

}
