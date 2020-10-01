package software.bytepushers.bpweb.model.dto;

import lombok.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

/**
 * The quote dto model.
 */
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class QuoteDto extends AbstractDto {

    @Valid
    @NotNull(message = "{person.details.required}")
    private PersonDto contact;

    @Valid
    @NotNull(message = "{company.details.required}")
    private CompanyDto company;

}
