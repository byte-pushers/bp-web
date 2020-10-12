package software.bytepushers.bpweb.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 * The target timeline embedded model
 */
@Getter
@Setter
@Embeddable
public class TargetTimeLine {

    @Column
    private String minTimeLine;

    @Column
    private String maxTimeLine;

}
