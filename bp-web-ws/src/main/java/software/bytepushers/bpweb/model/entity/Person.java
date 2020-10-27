package software.bytepushers.bpweb.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

/**
 * The person entity model.
 */
@Getter
@Setter
@Entity(name = "T_PERSON")
public class Person extends AbstractEntity {

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private String email;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "phone_id", referencedColumnName = "id", nullable = false)
    private Phone phone;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "id", nullable = false)
    private Address address;


}
