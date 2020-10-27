package software.bytepushers.bpweb.model.dto;

import lombok.*;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

/**
 * The company dto model.
 */
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CompanyDto extends AbstractDto {

    @NotEmpty(groups = CreateRequest.class, message = "{company.name.required}")
    private String name;

    @NotEmpty(groups = CreateRequest.class, message = "{company.type.required}")
    private String type;

    @NotEmpty(groups = CreateRequest.class, message = "{company.url.required}")
    private String url;

    @NotEmpty(groups = CreateRequest.class, message = "{company.description.required}")
    private String description;

    @NotNull(groups = CreateRequest.class, message = "{company.established.year.required}")
    private Integer establishedYear;

    @NotNull(groups = CreateRequest.class, message = "{company.budget.required}")
    private BudgetDto budget;

    @NotNull(groups = CreateRequest.class, message = "{company.timeline.required}")
    private TargetTimeLineDto timeline;

}
