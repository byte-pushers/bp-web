package software.bytepushers.bpweb.ghl.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

@Setter
@Getter
@NoArgsConstructor
// @JsonInclude(NON_NULL)
public class GoHighLevelContact {
    /*@JsonIgnore
    private String id;
    */
    private String firstName;
    private String lastName;
    private String name;
    private String email;
    private String locationId;
    private String gender;
    private String phone;
    private String address1;
    private String city;
    private String state;
    private String postalCode;
    private String website;
    private String timezone;
    private Boolean dnd;
    private List<String> tags;
    private String source;
    private String dateOfBirth;
    private String country;
    private String companyName;
    private String assignedTo;
    /*@Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        GoHighLevelContact that = (GoHighLevelContact) o;
        return Objects.equals(getId(), that.getId()) && Objects.equals(getFirstName(), that.getFirstName()) && Objects.equals(getLastName(), that.getLastName()) && Objects.equals(getName(), that.getName()) && Objects.equals(getEmail(), that.getEmail()) && Objects.equals(getLocationId(), that.getLocationId()) && Objects.equals(getGender(), that.getGender()) && Objects.equals(getPhone(), that.getPhone()) && Objects.equals(getAddress1(), that.getAddress1()) && Objects.equals(getCity(), that.getCity()) && Objects.equals(getState(), that.getState()) && Objects.equals(getPostalCode(), that.getPostalCode()) && Objects.equals(getWebsite(), that.getWebsite()) && Objects.equals(getTimezone(), that.getTimezone()) && Objects.equals(getDnd(), that.getDnd()) && Objects.equals(getTags(), that.getTags()) && Objects.equals(getSource(), that.getSource()) && Objects.equals(getDateOfBirth(), that.getDateOfBirth()) && Objects.equals(getCountry(), that.getCountry()) && Objects.equals(getCompanyName(), that.getCompanyName()) && Objects.equals(getAssignedTo(), that.getAssignedTo());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getFirstName(), getLastName(), getName(), getEmail(), getLocationId(), getGender(), getPhone(), getAddress1(), getCity(), getState(), getPostalCode(), getWebsite(), getTimezone(), getDnd(), getTags(), getSource(), getDateOfBirth(), getCountry(), getCompanyName(), getAssignedTo());
    }*/
}
