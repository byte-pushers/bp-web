package software.bytepushers.bpweb.model.entity;

import lombok.Getter;
import lombok.Setter;
import software.bytepushers.bpweb.model.entity.ValidatorModel.CreateRequest;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.validation.constraints.NotEmpty;

/**
 * The phone dto model.
 */
@Getter
@Setter
@Entity(name = "T_PHONE")
public class Phone extends AbstractEntity {

    @Column
    @NotEmpty(groups = CreateRequest.class, message = "{person.phone.number.required}")
    private String number;

    @Column
    @NotEmpty(groups = CreateRequest.class, message = "{person.phone.type.required}")
    private String type;

}
