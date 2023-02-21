package software.bytepushers.bpweb.model.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDateTime;

@Getter
@Setter
public class HotSpotQuote implements Serializable {
//    private Long hs_quote_amount;
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
    private LocalDateTime hs_createdate;
    private LocalDateTime hs_lastmodifieddate;
    private String hs_expiration_date;
}
