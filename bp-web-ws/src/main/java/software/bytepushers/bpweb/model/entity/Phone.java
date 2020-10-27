package software.bytepushers.bpweb.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;

/**
 * The phone dto model.
 */
@Getter
@Setter
@Entity(name = "T_PHONE")
public class Phone extends AbstractEntity {

    @Column
    private String phoneNumber;

    @Column
    private String phoneYype;

}
