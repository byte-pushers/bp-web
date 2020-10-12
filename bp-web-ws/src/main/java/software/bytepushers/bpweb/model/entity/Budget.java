package software.bytepushers.bpweb.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 * The budget embedded entity model.
 */
@Getter
@Setter
@Embeddable
public class Budget {

    @Column
    private long minBudget;

    @Column
    private long maxBudget;
}
