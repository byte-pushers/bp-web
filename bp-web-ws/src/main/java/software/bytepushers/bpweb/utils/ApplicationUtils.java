package software.bytepushers.bpweb.utils;

import org.modelmapper.ModelMapper;
import software.bytepushers.bpweb.exceptions.MalformedRequestException;

import java.util.Arrays;
import java.util.Optional;

/**
 * Utility methods of the application
 */
public class ApplicationUtils {

    /**
     * The method implementation is responsible for copying the date frm source to destination.
     *
     * @param source           with having valid values
     * @param destinationType  to create new instance with get filled up the values from source
     * @param ignoreProperties list to copy.
     * @param <T>              class type to create new instance
     * @return the generated object with copied value from the source.
     */
    public static <T> T copyProperties(Object source, Class<T> destinationType, String... ignoreProperties) {
        try {
            ModelMapper modelMapper = new ModelMapper();
            modelMapper.getConfiguration().setSkipNullEnabled(true);
            Optional.ofNullable(ignoreProperties).ifPresent(fields ->
                    Arrays.stream(fields).forEach(field ->
                            modelMapper.getConfiguration().setPropertyCondition(context ->
                                    !context.getMapping().getLastDestinationProperty().getName().equals(field))));
            return modelMapper.map(source, destinationType);
        } catch (Exception e) {
            throw new MalformedRequestException("Something went wrong");
        }
    }

}
