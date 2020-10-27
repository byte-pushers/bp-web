package software.bytepushers.bpweb.model.dto;

import lombok.*;

import javax.validation.constraints.NotNull;

/**
 * The budget dto model.
 */
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BudgetDto extends AbstractDto {

    @NotNull(groups = CreateRequest.class, message = "{company.min.budget.required}")
    private Long min;

    @NotNull(groups = CreateRequest.class, message = "{company.max.budget.required}")
    private Long max;

}
