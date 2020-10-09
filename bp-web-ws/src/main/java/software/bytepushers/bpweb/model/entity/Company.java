package software.bytepushers.bpweb.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;

/**
 * The company entity model.
 */
@Getter
@Setter
@Entity(name = "T_COMPANY")
public class Company extends AbstractEntity {

    @Column
    private String name;

    @Column
    private String type;

    @Column
    private String url;

    @Column
    private String description;

    @Embedded
    private Budget budget;

    @Embedded
    private TargetTimeLine timeline;

}
