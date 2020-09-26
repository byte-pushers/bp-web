package software.bytepushers.bpweb.model.dto;

import lombok.Getter;
import lombok.Setter;
import software.bytepushers.bpweb.model.dto.AbstractDto.CreateRequest;

import javax.validation.constraints.NotEmpty;

/**
 * The target timeline dto.
 */
@Getter
@Setter
public class TargetTimeLineDto {

    @NotEmpty(groups = {CreateRequest.class}, message = "{company.min.timeline.required}")
    private String minTimeLine;

    @NotEmpty(groups = {CreateRequest.class}, message = "{company.max.timeline.required}")
    private String maxTimeLine;

}
