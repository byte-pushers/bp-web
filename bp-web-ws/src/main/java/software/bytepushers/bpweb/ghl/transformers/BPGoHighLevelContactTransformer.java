package software.bytepushers.bpweb.ghl.transformers;

import software.bytepushers.bpweb.ghl.model.BPGoHighLevelContactRequestBody;
import software.bytepushers.bpweb.ghl.model.BPGoHighLevelContactResponseBody;
import software.bytepushers.bpweb.ghl.model.GoHighLevelContact;
import software.bytepushers.bpweb.ghl.model.GoHighLevelInfo;
import software.bytepushers.bpweb.model.PersonInfo;
import software.bytepushers.bpweb.model.entity.Address;
import software.bytepushers.bpweb.model.entity.Person;
import software.bytepushers.bpweb.model.entity.Phone;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;

public class BPGoHighLevelContactTransformer {
    private static volatile BPGoHighLevelContactTransformer instance;

    private BPGoHighLevelContactTransformer() {
    }

    public static BPGoHighLevelContactTransformer getInstance() {
        // First check (no locking)
        if (instance == null) {
            synchronized (BPGoHighLevelContactTransformer.class) {
                // Second check (with locking)
                if (instance == null) {
                    instance = new BPGoHighLevelContactTransformer();
                }
            }
        }
        return instance;
    }

    public GoHighLevelContact transformCreateContactRequest(BPGoHighLevelContactRequestBody requestBody) {
        GoHighLevelContact goHighLevelContact = new GoHighLevelContact();

        if (requestBody != null) {
            Person person = requestBody.getPerson();

            if (person != null) {
                goHighLevelContact.setFirstName(person.getFirstName());
                goHighLevelContact.setLastName(person.getLastName());
                goHighLevelContact.setName(person.getFirstName() + " " + person.getLastName());
                goHighLevelContact.setGender(person.getGender());
                goHighLevelContact.setEmail(person.getEmail());
                goHighLevelContact.setWebsite(person.getWebsite());
                goHighLevelContact.setTimezone(person.getTimezone());
                goHighLevelContact.setDateOfBirth(person.getDateOfBirth().format(DateTimeFormatter.ofPattern("MM-dd-yyyy")));
                if (person.getPhone() != null) goHighLevelContact.setPhone(person.getPhone().getNumber());
                if (person.getAddress() != null) {
                    Address address = person.getAddress();

                    goHighLevelContact.setAddress1(String.join("", address.getStreet()));
                    goHighLevelContact.setCity(address.getCity());
                    goHighLevelContact.setState(address.getState());
                    goHighLevelContact.setPostalCode(address.getZip());
                    goHighLevelContact.setCountry(address.getCountry());
                }
            }

            GoHighLevelInfo goHighLevelInfo = requestBody.getGoHighLevelInfo();

            if (goHighLevelInfo != null) {
                goHighLevelContact.setLocationId(goHighLevelInfo.getLocationId());
                goHighLevelContact.setSource(goHighLevelInfo.getSource());
                goHighLevelContact.setAssignedTo(goHighLevelInfo.getAssignedTo());
            }

            PersonInfo personInfo = requestBody.getPersonInfo();

            if (personInfo != null) goHighLevelContact.setCompanyName(personInfo.getCompanyName());


        }

        return goHighLevelContact;
    }

    public BPGoHighLevelContactResponseBody transformCreateContactResponse(GoHighLevelContact goHighLevelContact) {
        Person person = new Person();
        GoHighLevelInfo goHighLevelInfo = new GoHighLevelInfo();
        PersonInfo personInfo = new PersonInfo();

        if (goHighLevelContact != null) {
            person.setFirstName(goHighLevelContact.getFirstName());
            person.setLastName(goHighLevelContact.getLastName());
            person.setGender(goHighLevelContact.getGender());
            person.setEmail(goHighLevelContact.getEmail());
            person.setWebsite(goHighLevelContact.getWebsite());
            person.setTimezone(goHighLevelContact.getTimezone());

            if (goHighLevelContact.getDateOfBirth() != null) {
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
                LocalDate localDate = LocalDate.parse(goHighLevelContact.getDateOfBirth(), formatter);
                person.setDateOfBirth(localDate);
            }

            if (goHighLevelContact.getPhone() != null) {
                Phone phone = new Phone();
                phone.setNumber(goHighLevelContact.getPhone());
                person.setPhone(phone);
            }

            Address address = person.getAddress();
            if (address != null) {
                if (goHighLevelContact.getAddress1() != null)
                    address.setStreet(Arrays.asList(goHighLevelContact.getAddress1().split("")));

                address.setCity(goHighLevelContact.getCity());
                address.setState(goHighLevelContact.getState());
                address.setZip(goHighLevelContact.getPostalCode());
                address.setCountry(goHighLevelContact.getCountry());
            }

            goHighLevelContact.setLocationId(goHighLevelInfo.getLocationId());
            goHighLevelContact.setSource(goHighLevelInfo.getSource());
            goHighLevelContact.setAssignedTo(goHighLevelInfo.getAssignedTo());

            personInfo.setCompanyName(goHighLevelContact.getCompanyName());
        }

        BPGoHighLevelContactResponseBody responseBody = new BPGoHighLevelContactResponseBody();
        responseBody.setPersonInfo(personInfo);
        responseBody.setGoHighLevelInfo(goHighLevelInfo);
        responseBody.setPerson(person);

        return responseBody;
    }
}
