package software.bytepushers.bpweb.model.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class HubSpotQuote implements Serializable {
    private String hs_sender_company_name;
    private String hs_title;
    private String hs_sender_company_domain;
    private String hs_sender_phone;
    private String hs_sender_company_address;
    private String hs_sender_company_address2;
    private String hs_sender_company_city;
    private String hs_sender_company_state;
    private String hs_sender_company_zip;
    private String hs_sender_company_country;
    private String hs_sender_firstname;
    private String hs_sender_lastname;
    private String hs_sender_email;
    private String hs_comments;
    private String hs_expiration_date;
    private String hs_status;
    private String hs_language;
    private List<HubSpotAssociation> associations = new ArrayList<>();
}
