package software.bytepushers.bpweb.model.dto;

import lombok.*;
import software.bytepushers.bpweb.model.dto.AbstractDto.CreateRequest;

import javax.validation.constraints.NotEmpty;

/**
 * The target timeline dto.
 */
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TargetTimeLineDto {

    @NotEmpty(groups = {CreateRequest.class}, message = "{company.min.timeline.required}")
    private String minTimeLine;

    @NotEmpty(groups = {CreateRequest.class}, message = "{company.max.timeline.required}")
    private String maxTimeLine;

}
