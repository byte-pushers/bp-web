package software.bytepushers.bpweb.model.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class HubSpotDeal implements Serializable {
    private Long amount;
    private String dealname;
    private Long project_target_time_line_min;
    private Long project_target_time_line_max;
    private Integer project_target_time_line_max_finite;
    private Long project_budget_amount_min;
    private Long project_budget_amount_max;
    private Integer project_budget_amount_max_finite;
    private Integer company_established;
    private Integer company_established_year;
    private Integer company_foundation;
    private String project_plateform;
    private String project_type;
}
