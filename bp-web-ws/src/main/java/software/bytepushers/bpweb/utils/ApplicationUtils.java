package software.bytepushers.bpweb.utils;

import lombok.extern.log4j.Log4j2;
import org.apache.commons.lang3.StringUtils;
import org.modelmapper.ModelMapper;
import software.bytepushers.bpweb.exceptions.MalformedRequestException;
import software.bytepushers.bpweb.model.dto.ApiConstants;
import software.bytepushers.bpweb.model.dto.ApiErrorResponse;
import software.bytepushers.bpweb.model.dto.ApiValidationError;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

/**
 * Utility methods of the application
 */
@Log4j2
public class ApplicationUtils {

    /**
     * The method implementation is responsible for copying the properties from source to target object
     *
     * @param source           from where to copy values
     * @param target           to paste the values
     * @param ignoreProperties to ignore from the list to cop/paste the fields.
     */
    public static void copyProperties(Object source, Object target, String... ignoreProperties) {
        try {
            ModelMapper modelMapper = getModelMapper(ignoreProperties);
            modelMapper.getConfiguration().setDeepCopyEnabled(true);
            modelMapper.map(source, target);
        } catch (Exception e) {
            log.error("Error on copying properties. {}", e.getMessage(), e);
            throw new MalformedRequestException(new ApiErrorResponse(ApiErrorResponse.FAILURE, StringUtils.EMPTY,
                                                                     new ApiValidationError(ApiConstants.ErrorEnum.COMMON_API_ERROR,
                                                                                        Collections.emptyList(),
                                                                                        Collections.singletonList(e.getMessage()))));
        }
    }

    /**
     * The method implementation is responsible for providing the model mapper for the application standards.
     *
     * @param ignoreProperties to ignore from the list to cop/paste the fields.
     * @return application standard model mapper.
     */
    private static ModelMapper getModelMapper(String[] ignoreProperties) {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setSkipNullEnabled(true);
        Optional.ofNullable(ignoreProperties).ifPresent(fields ->
                Arrays.stream(fields).forEach(field ->
                        modelMapper.getConfiguration().setPropertyCondition(context ->
                                !context.getMapping().getLastDestinationProperty().getName().equals(field))));
        return modelMapper;
    }

    public static String replaceDynamicResponseValue(String message, List<String> values){
        if(null != message && !values.isEmpty()){
            for(int i=0;i<values.size();i++){
                message = message.replaceFirst("\\$"+i, values.get(i));
            }
        }
        return message;
    }

}
