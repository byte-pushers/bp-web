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
public class BudgetDto {

    @NotNull(message = "{company.min.budget.required}")
    private Long minBudget;

    @NotNull(message = "{company.max.budget.required}")
    private Long maxBudget;

}
