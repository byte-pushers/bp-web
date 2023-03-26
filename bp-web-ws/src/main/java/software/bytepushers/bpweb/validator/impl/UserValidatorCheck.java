package software.bytepushers.bpweb.validator.impl;


import software.bytepushers.bpweb.config.AppMessages;
import software.bytepushers.bpweb.config.ApplicationContext;
import software.bytepushers.bpweb.model.dto.UserDetailsDto;
import software.bytepushers.bpweb.model.entity.User;
import software.bytepushers.bpweb.repository.UserRepository;
import software.bytepushers.bpweb.validator.ABaseValidator;
import software.bytepushers.bpweb.validator.UserValidator;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.Optional;

/**
 * User validator implementation.
 */
public class UserValidatorCheck extends ABaseValidator implements ConstraintValidator<UserValidator, UserDetailsDto> {

    private final UserRepository userRepository;

    private final AppMessages appMessages;

    public UserValidatorCheck() {
        this.userRepository = ApplicationContext.getContext().getBean(UserRepository.class);
        this.appMessages = ApplicationContext.getContext().getBean(AppMessages.class);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void initialize(UserValidator constraintAnnotation) {
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public boolean isValid(UserDetailsDto user, ConstraintValidatorContext constraintValidatorContext) {
        boolean isValid = true;
        Optional<User> optionalUser = this.userRepository.findByUsername(user.getUsername());
        if (optionalUser.isPresent()) {
            isValid = false;
            String message = this.appMessages.getMessage("user.username.already.used");
            buildCustomErrorMessage(constraintValidatorContext, message);
        }
        optionalUser = this.userRepository.findByEmail(user.getEmail());
        if (optionalUser.isPresent()) {
            isValid = false;
            String message = this.appMessages.getMessage("user.email.already.used");
            buildCustomErrorMessage(constraintValidatorContext, message);
        }
        return isValid;
    }
}
