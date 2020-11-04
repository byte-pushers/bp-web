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
    @NotEmpty(groups = CreateRequest.class, message = "{person.address.street1.required}")
    private List<String> street;

    @Column
    @NotEmpty(groups = CreateRequest.class, message = "{person.address.city.required}")
    private String city;

    @Column
    @NotEmpty(groups = CreateRequest.class, message = "{person.address.state.required}")
    private String state;

    @Column
    @NotEmpty(groups = CreateRequest.class, message = "{person.address.zip.required}")
    private String zip;

    @Column
    @NotEmpty(groups = CreateRequest.class, message = "{person.address.country.required}")
    private String country;

    @Column
    @NotEmpty(groups = CreateRequest.class, message = "{person.address.county.required}")
    private String county;
}
