package software.bytepushers.bpweb.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.RestTemplate;
import software.bytepushers.bpweb.model.entity.Quote;
import software.bytepushers.bpweb.service.impl.CRMIntegrationFactory;
import software.bytepushers.bpweb.service.impl.CRMIntegrationService;
import software.bytepushers.bpweb.service.impl.HubspotCRMIntegrationService;
import software.bytepushers.bpweb.utils.ModelUtils;

/**
 * The quote service test cases
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = {CRMIntegrationService.class, CRMIntegrationFactory.class, HubspotCRMIntegrationService.class, RestTemplate.class})
public class CRMIntegrationServiceTest {
    @Autowired
    private CRMIntegrationService crmIntegrationService;

    @Test
    public void testCreateAllCRMEntitiesUsingFactory() {

        Quote quote = ModelUtils.quoteEntity();
        crmIntegrationService.createAllCRMEntities(quote);
        assert quote != null : "Quote successfully created using factory";
    }
}
