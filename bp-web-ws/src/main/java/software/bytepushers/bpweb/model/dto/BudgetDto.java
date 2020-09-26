package software.bytepushers.bpweb.model.dto;

import lombok.Getter;
import lombok.Setter;
import software.bytepushers.bpweb.model.dto.AbstractDto.CreateRequest;

import javax.validation.constraints.NotNull;

/**
 * The budget dto model.
 */
@Getter
@Setter
public class BudgetDto {

    @NotNull(groups = {CreateRequest.class}, message = "{company.min.budget.required}")
    private Long minBudget;

    @NotNull(groups = {CreateRequest.class}, message = "{company.max.budget.required}")
    private Long maxBudget;

}
