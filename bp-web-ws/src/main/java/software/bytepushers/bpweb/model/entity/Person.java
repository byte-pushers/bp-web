package software.bytepushers.bpweb.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;

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

    @Column
    private String phone;

    @Embedded
    private Address address;

}
