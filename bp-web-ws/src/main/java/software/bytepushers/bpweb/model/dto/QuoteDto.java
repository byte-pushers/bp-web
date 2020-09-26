package software.bytepushers.bpweb.model.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

/**
 * The quote dto model.
 */
@Getter
@Setter
public class QuoteDto extends AbstractDto {

    @Valid
    @NotNull(message = "{person.details.required}")
    private PersonDto contact;

    @Valid
    @NotNull(message = "{company.details.required}")
    private CompanyDto company;

}
