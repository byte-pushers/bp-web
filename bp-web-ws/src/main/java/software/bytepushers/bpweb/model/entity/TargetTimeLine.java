package software.bytepushers.bpweb.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;

/**
 * The target timeline embedded model
 */
@Getter
@Setter
@Entity(name = "T_TARGET_TIME_LINE")
public class TargetTimeLine extends AbstractEntity {

    @Column
    private String min;

    @Column
    private String max;

}
