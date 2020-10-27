package software.bytepushers.bpweb.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;

/**
 * The budget embedded entity model.
 */
@Getter
@Setter
@Entity(name = "T_BUDGET")
public class Budget extends AbstractEntity {

    @Column
    private long min;

    @Column
    private long max;
}
