package software.bytepushers.bpweb.model.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

/**
 * The company dto model.
 */
@Getter
@Setter
public class CompanyDto extends AbstractDto {

    @NotEmpty(message = "{company.name.required}")
    private String name;

    @NotEmpty(message = "{company.type.required}")
    private String type;

    @NotEmpty(message = "{company.url.required}")
    private String url;

    @NotEmpty(message = "{company.description.required}")
    private String description;

    @Valid
    @NotNull(message = "{company.budget.required}")
    private BudgetDto budget;

    @Valid
    @NotNull(message = "{company.timeline.required}")
    private TargetTimeLineDto timeline;

}
