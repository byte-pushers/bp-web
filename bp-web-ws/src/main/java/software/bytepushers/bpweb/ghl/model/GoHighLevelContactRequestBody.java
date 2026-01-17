package software.bytepushers.bpweb.ghl.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import software.bytepushers.bpweb.model.PersonInfo;
import software.bytepushers.bpweb.model.entity.Person;

@Getter
@Setter
@RequiredArgsConstructor
public class GoHighLevelContactRequestBody {
    private Person person;
    private GoHighLevelInfo goHighLevelInfo;
    private PersonInfo personInfo;
}
