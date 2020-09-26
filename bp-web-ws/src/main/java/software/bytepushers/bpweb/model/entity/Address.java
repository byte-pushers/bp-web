package software.bytepushers.bpweb.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 * The Address entity which would embedded to some other entity.
 */
@Getter
@Setter
@Embeddable
public class Address {

    @Column
    private String street1;

    @Column
    private String street2;

    @Column
    private String city;

    @Column
    private String state;

    @Column
    private String zip;

    @Column
    private String country;
}
