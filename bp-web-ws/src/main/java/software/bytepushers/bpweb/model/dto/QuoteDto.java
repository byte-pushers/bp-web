package software.bytepushers.bpweb.model.dto;

import lombok.*;
import software.bytepushers.bpweb.validator.ApplicationValidator;

import javax.validation.constraints.NotNull;
import java.util.UUID;

/**
 * The quote dto model.
 */
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ApplicationValidator
public class QuoteDto extends AbstractDto {

    @NotNull(groups = UpdateRequest.class, message = "{id.required}")
    private UUID id;

    @NotNull(groups = CreateRequest.class, message = "{person.details.required}")
    private PersonDto contact;

    @NotNull(groups = CreateRequest.class, message = "{company.details.required}")
    private CompanyDto company;
}
