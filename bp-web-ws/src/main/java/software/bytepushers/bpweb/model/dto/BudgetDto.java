package software.bytepushers.bpweb.model.dto;

import lombok.*;
import software.bytepushers.bpweb.model.dto.AbstractDto.CreateRequest;

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

    @NotNull(groups = CreateRequest.class, message = "{company.min.budget.required}")
    private Long minBudget;

    @NotNull(groups = CreateRequest.class, message = "{company.max.budget.required}")
    private Long maxBudget;

}
