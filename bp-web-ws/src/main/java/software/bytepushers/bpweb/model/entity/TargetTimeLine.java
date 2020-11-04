package software.bytepushers.bpweb.model.entity;

import lombok.Getter;
import lombok.Setter;
import software.bytepushers.bpweb.model.entity.ValidatorModel.CreateRequest;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.validation.constraints.NotEmpty;

/**
 * The target timeline embedded model
 */
@Getter
@Setter
@Entity(name = "T_TARGET_TIME_LINE")
public class TargetTimeLine extends AbstractEntity {

    @Column
    @NotEmpty(groups = CreateRequest.class, message = "{company.min.timeline.required}")
    private String min;

    @Column
    @NotEmpty(groups = CreateRequest.class, message = "{company.max.timeline.required}")
    private String max;

}