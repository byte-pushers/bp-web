package software.bytepushers.bpweb.service.impl;

import org.springframework.stereotype.Service;
import software.bytepushers.bpweb.constants.CRMIntegrationType;
import software.bytepushers.bpweb.service.CRMIntegration;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class CRMIntegrationFactory {
    private final Map<CRMIntegrationType, CRMIntegration> crmIntegrationMap;

    public CRMIntegrationFactory(List<CRMIntegration> crmIntegrations) {
        this.crmIntegrationMap = crmIntegrations.stream()
                .collect(Collectors.toUnmodifiableMap(CRMIntegration::getCRMIntegrationType, Function.identity()));
    }

    public CRMIntegration getCRMIntegration(CRMIntegrationType crmIntegrationType) throws IllegalAccessException {
        return Optional.ofNullable(crmIntegrationMap.get(crmIntegrationType)).orElseThrow(IllegalAccessException::new);
    }
}
