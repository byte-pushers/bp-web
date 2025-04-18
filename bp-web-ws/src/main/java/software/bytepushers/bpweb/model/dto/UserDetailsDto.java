package software.bytepushers.bpweb.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.BeanUtils;
import software.bytepushers.bpweb.model.entity.User;
import software.bytepushers.bpweb.validator.UserValidator;
import software.bytepushers.bpweb.model.entity.Role;

import javax.validation.constraints.*;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * User DTO class
 */
@Getter
@Setter
@UserValidator(groups = {UserDto.CreateUserRequest.class})
public class UserDetailsDto {

    @NotNull(groups = {UserDto.UpdateUserRequest.class}, message = "{user.id.required}")
    private Long id;

    @NotEmpty(groups = {UserDto.CreateUserRequest.class}, message = "{user.firstname.required}")
    @Size(groups = {UserDto.CreateUserRequest.class, UserDto.UpdateUserRequest.class}, min = 2, max = 50, message = "{user.firstname.size}")
    private String firstName;

    @NotEmpty(groups = {UserDto.CreateUserRequest.class}, message = "{user.lastname.required}")
    @Size(groups = {UserDto.CreateUserRequest.class, UserDto.UpdateUserRequest.class}, min = 1, max = 50, message = "{user.lastname.size}")
    private String lastName;

    @NotEmpty(groups = {UserDto.CreateUserRequest.class}, message = "{user.email.required}")
    @Email(groups = {UserDto.CreateUserRequest.class, UserDto.UpdateUserRequest.class}, message = "{user.email.invalid}")
    private String email;

    @NotEmpty(groups = {UserDto.CreateUserRequest.class}, message = "{user.phone.required}")
    @Pattern(groups = {UserDto.CreateUserRequest.class, UserDto.UpdateUserRequest.class}, regexp = "(^$|[0-9]{10})", message = "{phone.number.invalid}")
    private String phone;

    @NotEmpty(groups = {UserDto.CreateUserRequest.class}, message = "{user.state.required}")
    @Size(groups = {UserDto.CreateUserRequest.class, UserDto.UpdateUserRequest.class}, min = 2, message = "{user.state.name.size}")
    private String state;

    @NotEmpty(groups = {UserDto.CreateUserRequest.class}, message = "{user.username.required}")
    private String username;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @NotEmpty(groups = {UserDto.CreateUserRequest.class}, message = "{user.password.required}")
    @Size(groups = {UserDto.CreateUserRequest.class, UserDto.UpdateUserRequest.class}, min = 8, message = "{user.password.size}")
    private String password;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private List<String> roles = new ArrayList<>();

    public static UserDetailsDto fromEntity(User user) {
        UserDetailsDto userDto = new UserDetailsDto();
        BeanUtils.copyProperties(user, userDto);
        userDto.setRoles(user.getRoles().stream().map(Role::getName).collect(Collectors.toList()));
        return userDto;
    }

}
