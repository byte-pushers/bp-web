package software.bytepushers.bpweb.model.dto;

import lombok.Getter;
import lombok.Setter;
import software.bytepushers.bpweb.model.entity.ValidatorModel;
import software.bytepushers.bpweb.validator.ApplicationValidator;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Getter
@Setter
@ApplicationValidator
public class HubSpotContactDto implements Serializable {

    @NotNull(groups = ValidatorModel.CreateRequest.class, message = "{person.firstname.required}")
    private String firstname;

    @NotNull(groups = ValidatorModel.CreateRequest.class, message = "{person.lastname.required}")
    private String lastname;

    @NotEmpty(groups = ValidatorModel.CreateRequest.class, message = "{person.email.required}")
    @Email(groups = ValidatorModel.CreateRequest.class, message = "{person.email.invalid}")
    private String email;

    //@NotNull(groups = ValidatorModel.CreateRequest.class, message = "{company.details.required}")
    private String company;
    private Boolean consent;
    private String landingPageCategory;
}
