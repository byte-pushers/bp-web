package software.bytepushers.bpweb.service.impl;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import software.bytepushers.bpweb.constants.CRMIntegrationType;

@Service
@Log4j2
public class CRMIntegrationService {
    private final CRMIntegrationFactory crmIntegrationFactory;

    public CRMIntegrationService(CRMIntegrationFactory crmIntegrationFactory) {
        this.crmIntegrationFactory = crmIntegrationFactory;
    }

    public void createEntities(CRMIntegrationType crmIntegrationType, Object object) throws IllegalAccessException {
        crmIntegrationFactory.getCRMIntegration(crmIntegrationType).createEntities(object);
    }

    public void createAllCRMEntities(Object object) {
        log.info("Start createAllCRMEntities");
        for (CRMIntegrationType crmIntegrationType : CRMIntegrationType.values()) {
            try {
                createEntities(crmIntegrationType, object);
            } catch (IllegalAccessException e) {
                log.error("IllegalAccessException while createEntities to CRM");
            }
        }
        log.info("End createAllCRMEntities");
    }
}
