package software.bytepushers.bpweb.validator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * The custom application validator.
 */
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = ApplicationValidatorImpl.class)
public @interface ApplicationValidator {

    /**
     * The default message.
     */
    String message() default "{user.details.required}";

    /**
     * Groups to execute validator
     */
    Class<?>[] groups() default {};

    /**
     * Payload
     */
    Class<? extends Payload>[] payload() default {};

}
