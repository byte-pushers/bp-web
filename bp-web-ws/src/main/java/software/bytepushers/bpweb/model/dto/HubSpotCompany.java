package software.bytepushers.bpweb.model.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class HubSpotCompany implements Serializable {
//    private Long hs_quote_amount;
    private String name;
    private String website;
    private String founded_year;
    private String type;
    private String address;
    private String address2;
    private String city;
    private String state;
    private String country;
    private String zip;
    private String owneremail;
}
