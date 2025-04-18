package software.bytepushers.bpweb.validator;



import software.bytepushers.bpweb.validator.impl.UserValidatorCheck;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * The custom validator for User.
 */
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = UserValidatorCheck.class)
public @interface UserValidator {

    /**
     * The default message.
     *
     * @return the default message if validation getting failed
     */
    String message() default "{user.details.required}";

    /**
     * Groups to execute validator
     *
     * @return the configured groups
     */
    Class<?>[] groups() default {};

    /**
     * Payload
     *
     * @return the configured payloads
     */
    Class<? extends Payload>[] payload() default {};
}
