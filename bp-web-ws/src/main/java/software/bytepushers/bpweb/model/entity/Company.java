package software.bytepushers.bpweb.model.entity;

import lombok.Getter;
import lombok.Setter;
import software.bytepushers.bpweb.model.entity.ValidatorModel.CreateRequest;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

/**
 * The company entity model.
 */
@Getter
@Setter
@Entity(name = "T_COMPANY")
public class Company extends AbstractEntity {

    @Column
    @NotEmpty(groups = CreateRequest.class, message = "{company.name.required}")
    private String name;

    @Column
    private String type;

    @Column
    private String url;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "budget_id", referencedColumnName = "id", nullable = false)
    @NotNull(groups = CreateRequest.class, message = "{company.budget.required}")
    private Budget budget;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "timeline_id", referencedColumnName = "id", nullable = false)
    @NotNull(groups = CreateRequest.class, message = "{company.timeline.required}")
    private TargetTimeLine timeline;

    @Column
    @NotNull(groups = CreateRequest.class, message = "{company.is.established.check.required}")
    private Boolean isEstablished;

    @Column
    private Integer establishedYear;

    @Column
    private String foundation;

}
