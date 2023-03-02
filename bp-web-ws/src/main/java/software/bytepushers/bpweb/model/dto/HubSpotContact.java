package software.bytepushers.bpweb.model.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class HubSpotContact implements Serializable {
//    private Long hs_quote_amount;
    private String phone;
    private String address;
    private String city;
    private String state;
    private String zip;
    private String country;
    private String firstname;
    private String lastname;
    private String email;
    private String company;
    private String website;
}
