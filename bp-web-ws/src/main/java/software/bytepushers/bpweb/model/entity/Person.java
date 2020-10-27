package software.bytepushers.bpweb.model.entity;

import lombok.Getter;
import lombok.Setter;
import software.bytepushers.bpweb.model.entity.ValidatorModel.CreateRequest;
import software.bytepushers.bpweb.model.entity.ValidatorModel.UpdateRequest;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

/**
 * The person entity model.
 */
@Getter
@Setter
@Entity(name = "T_PERSON")
public class Person extends AbstractEntity {

    @Column
    @NotEmpty(groups = CreateRequest.class, message = "{person.firstname.required}")
    private String firstName;

    @Column
    @NotEmpty(groups = CreateRequest.class, message = "{person.lastname.required}")
    private String lastName;

    @Column
    @NotEmpty(groups = CreateRequest.class, message = "{person.email.required}")
    @Email(groups = {CreateRequest.class, UpdateRequest.class}, message = "{person.email.invalid}")
    private String email;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "phone_id", referencedColumnName = "id", nullable = false)
    @NotNull(groups = CreateRequest.class, message = "{person.phone.details.required}")
    private Phone phone;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "id", nullable = false)
    @NotNull(groups = CreateRequest.class, message = "{person.address.details.required}")
    private Address address;

}
