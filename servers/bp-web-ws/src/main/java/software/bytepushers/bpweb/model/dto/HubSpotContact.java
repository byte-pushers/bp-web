package software.bytepushers.bpweb.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import software.bytepushers.bpweb.model.entity.ValidatorModel;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Getter
@Setter
@ToString
public class HubSpotContact implements Serializable {

    private String phone;
    private String address;
    private String city;
    private String state;
    private String zip;
    private String country;
    private String website;
    private String firstname;
    private String lastname;
    private String email;
    private String company;
    private Boolean hs_feedback_show_nps_web_survey;
    private String industry;
}
