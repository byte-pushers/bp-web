package software.bytepushers.bpweb.model.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import software.bytepushers.bpweb.model.entity.ValidatorModel.CreateRequest;
import software.bytepushers.bpweb.model.entity.ValidatorModel.UpdateRequest;
import software.bytepushers.bpweb.validator.ApplicationValidator;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.UUID;

/**
 * The quote entity model
 */
@Getter
@Setter
@Entity(name = "T_QUOTE")
@ApplicationValidator
public class Quote /*extends AbstractEntity */{

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    @NotNull(groups = UpdateRequest.class, message = "{id.required}")
    private UUID id;

    @Column
    @NotEmpty(groups = CreateRequest.class, message = "{project.description.required}")
    private String description;

    @Column
    @CreatedDate
    private LocalDateTime createdDate;

    @Column
    @LastModifiedDate
    private LocalDateTime updatedDate;

    @NotNull(groups = CreateRequest.class, message = "{person.details.required}")
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "contact_id", referencedColumnName = "id", nullable = false)
    private Person contact;

    @NotNull(groups = CreateRequest.class, message = "{company.details.required}")
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "company_id", referencedColumnName = "id", nullable = false)
    private Company company;

    @Column
    private String projectPlatform;

    @Column
    private String projectType;

    @Column
    private String hubspotQuoteId;

    @Column
    private boolean disabled = false;

}
