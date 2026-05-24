package software.bytepushers.bpweb.ghl.service;

import software.bytepushers.bpweb.ghl.model.BPGoHighLevelContactResponseBody;
import software.bytepushers.bpweb.ghl.model.BPGoHighLevelContactRequestBody;

public interface GoHighLevelContactService {
    String CONTACT_RESOURCE_URL = "https://services.leadconnectorhq.com/contacts/";
    BPGoHighLevelContactResponseBody createContact(BPGoHighLevelContactRequestBody bpGoHighLevelContactRequestBody);
}
