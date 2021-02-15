package software.bytepushers.bpweb.model.entity;

import lombok.Getter;
import lombok.Setter;
import software.bytepushers.bpweb.model.entity.ValidatorModel.CreateRequest;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

/**
 * The budget embedded entity model.
 */
@Getter
@Setter
@Entity(name = "T_BUDGET")
public class Budget extends AbstractEntity {

    @Column
    private Long min;

    @Column
    private Long max;

    @Column
    private Boolean isMaxFinite;
}
