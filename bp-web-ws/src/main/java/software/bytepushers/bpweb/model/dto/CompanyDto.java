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

    @NotEmpty(groups = {CreateRequest.class}, message = "{company.name.required}")
    private String name;

    @NotEmpty(groups = {CreateRequest.class}, message = "{company.type.required}")
    private String type;

    @NotEmpty(groups = {CreateRequest.class}, message = "{company.url.required}")
    private String url;

    @NotEmpty(groups = {CreateRequest.class}, message = "{company.description.required}")
    private String description;

    @Valid
    @NotNull(groups = {CreateRequest.class}, message = "{company.budget.required}")
    private BudgetDto budget;

    @Valid
    @NotNull(groups = {CreateRequest.class}, message = "{company.timeline.required}")
    private TargetTimeLineDto timeline;

}
