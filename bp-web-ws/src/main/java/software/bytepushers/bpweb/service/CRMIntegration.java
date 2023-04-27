package software.bytepushers.bpweb.service;

import software.bytepushers.bpweb.constants.CRMIntegrationType;

//This could be CRMIntegrationService
public interface CRMIntegration<T>{

    CRMIntegrationType getCRMIntegrationType();
    T createEntities(T object);

}
