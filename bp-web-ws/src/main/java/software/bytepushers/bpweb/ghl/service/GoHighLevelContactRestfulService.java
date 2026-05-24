package software.bytepushers.bpweb.ghl.service;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import software.bytepushers.bpweb.ghl.model.BPGoHighLevelContactResponseBody;
import software.bytepushers.bpweb.ghl.model.GoHighLevelContact;
import software.bytepushers.bpweb.ghl.model.BPGoHighLevelContactRequestBody;
import software.bytepushers.bpweb.ghl.model.GoHighLevelContactResponse;
import software.bytepushers.bpweb.ghl.transformers.BPGoHighLevelContactTransformer;

import java.util.Collections;

@Service
public class GoHighLevelContactRestfulService implements GoHighLevelContactService {
    private final RestTemplate restTemplate;

    public GoHighLevelContactRestfulService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Override
    public BPGoHighLevelContactResponseBody createContact(BPGoHighLevelContactRequestBody bpGoHighLevelContactRequestBody) {

        GoHighLevelContact newGoHighLevelContact = BPGoHighLevelContactTransformer.getInstance().transformCreateContactRequest(bpGoHighLevelContactRequestBody);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headers.set("Authorization", "Bearer pit-751d6a33-35ae-416e-b0f6-6c3c6e00a63e");
        headers.set("Version", "2021-07-28");

        HttpEntity<GoHighLevelContact> request = new HttpEntity<>(newGoHighLevelContact, headers);
        GoHighLevelContactResponse goHighLevelContactResponse = restTemplate.postForObject(GoHighLevelContactService.CONTACT_RESOURCE_URL, request, GoHighLevelContactResponse.class);

        return BPGoHighLevelContactTransformer.getInstance().transformCreateContactResponse(goHighLevelContactResponse.getContact());
    }
}
