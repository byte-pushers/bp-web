package software.bytepushers.bpweb.model.entity;

import lombok.Getter;
import lombok.Setter;
import software.bytepushers.bpweb.model.entity.ValidatorModel.CreateRequest;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.validation.constraints.NotEmpty;
import java.util.List;

/**
 * The Address entity which would embedded to some other entity.
 */
@Getter
@Setter
@Entity(name = "T_ADDRESS")
public class Address extends AbstractEntity {

    @ElementCollection
    private List<String> street;

    @Column
    @NotEmpty(groups = CreateRequest.class, message = "{person.address.city.required}")
    private String city;

    @Column
    @NotEmpty(groups = CreateRequest.class, message = "{person.address.state.required}")
    private String state;

    @Column
    private String zip;

    @Column
    private String country;

    @Column
    private String county;
}
