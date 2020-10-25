package software.bytepushers.bpweb.validator;

import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpMethod;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import software.bytepushers.bpweb.model.dto.AbstractDto;

import javax.validation.*;
import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

/**
 * The custom validator implementation.
 */
@Log4j2
public class ApplicationValidatorImpl implements ConstraintValidator<ApplicationValidator, Object> {

    public boolean isValid(Object obj, ConstraintValidatorContext context) {
        HttpMethod httpMethodType = HttpMethod.resolve(((ServletRequestAttributes) RequestContextHolder
                .currentRequestAttributes()).getRequest().getMethod());
        Class<?> classType = null;
        if (httpMethodType != null) {
            switch (httpMethodType) {
                case POST:
                    classType = AbstractDto.CreateRequest.class;
                    break;
                case PUT:
                    classType = AbstractDto.UpdateRequest.class;
                    break;
            }
            if (classType != null) {
                Set<ConstraintViolation<Object>> violations = validateRequest(obj, classType);
                if (!violations.isEmpty()) {
                    throw new ConstraintViolationException(violations);
                }
            }
        }
        return true;
    }

    /**
     * The method implementation is responsible for validating the object manually
     *
     * @param object to validate
     * @param type   to validate the group.
     */
    private Set<ConstraintViolation<Object>> validateRequest(Object object, Class<?> type) {
        Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
        Field[] declaredFields = object.getClass().getDeclaredFields();
        Set<ConstraintViolation<Object>> constraintViolations = validator.validate(object, type);
        Set<ConstraintViolation<Object>> violations = new HashSet<>(constraintViolations);
        Arrays.stream(declaredFields).forEach(field -> {
            try {
                field.setAccessible(true);
                Object objectValue = field.get(object);
                if (field.getType().getCanonicalName().startsWith("software.bytepushers.bpweb") && objectValue != null) {
                    Set<ConstraintViolation<Object>> nestedObjectViolations = validator.validate(objectValue, type);
                    violations.addAll(nestedObjectViolations);
                    violations.addAll(validateRequest(objectValue, type));
                }
            } catch (Exception e) {
                log.error("Skipping to validate field: {}", field.getName());
            }
        });
        return violations;
    }
}
