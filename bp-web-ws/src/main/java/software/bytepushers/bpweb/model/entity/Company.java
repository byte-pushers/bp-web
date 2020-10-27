package software.bytepushers.bpweb.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

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

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "budget_id", referencedColumnName = "id", nullable = false)
    private Budget budget;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "timeline_id", referencedColumnName = "id", nullable = false)
    private TargetTimeLine timeline;

    @Column
    private Integer establishedYear;

}
