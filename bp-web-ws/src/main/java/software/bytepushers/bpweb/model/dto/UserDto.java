package software.bytepushers.bpweb.model.dto;

import lombok.Getter;
import lombok.Setter;
import software.bytepushers.bpweb.model.dto.enums.AccountTypeEnum;

import javax.validation.constraints.NotNull;

/**
 * User DTO class
 */
@Getter
@Setter
public class UserDto {

    @NotNull(message = "{user.details.required}")
    private UserDetailsDto user;

    @NotNull(groups = {CreateUserRequest.class}, message = "{user.account.type.required}")
    private AccountTypeEnum type;

    public interface CreateUserRequest {
    }

    public interface UpdateUserRequest {
    }

}
