package software.bytepushers.bpweb.model.dto;

import lombok.*;

import javax.validation.constraints.NotEmpty;

/**
 * The target timeline dto.
 */
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TargetTimeLineDto extends AbstractDto {

    @NotEmpty(groups = CreateRequest.class, message = "{company.min.timeline.required}")
    private String min;

    @NotEmpty(groups = CreateRequest.class, message = "{company.max.timeline.required}")
    private String max;

}
