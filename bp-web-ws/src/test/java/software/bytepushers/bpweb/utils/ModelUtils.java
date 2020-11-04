package software.bytepushers.bpweb.utils;

import org.fluttercode.datafactory.impl.DataFactory;
import software.bytepushers.bpweb.model.entity.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

/**
 * Model/Dto class object generator
 */
public class ModelUtils {

    public static Quote quoteDto() {
        DataFactory df = new DataFactory();
        Quote quote = new Quote();
        quote.setCompany(company());
        quote.setProjectPlatform(df.getRandomWord(5));
        quote.setProjectType(df.getRandomWord(5));
        quote.setContact(person());
        return quote;
    }

    public static Phone phone() {
        DataFactory df = new DataFactory();
        Phone phone = new Phone();
        phone.setNumber(df.getRandomWord(1));
        phone.setType("home");
        return phone;
    }

    public static Address address() {
        DataFactory df = new DataFactory();
        Address address = new Address();
        address.setStreet(List.of(df.getStreetName(), df.getStreetName()));
        address.setCity(df.getCity());
        address.setCountry(df.getRandomChars(3));
        address.setState(df.getRandomWord(5));
        address.setZip(df.getRandomWord(6));
        address.setCounty(df.getRandomChars(3));
        return address;
    }

    public static Person person() {
        DataFactory df = new DataFactory();
        Person person = new Person();
        person.setFirstName(df.getFirstName());
        person.setLastName(df.getLastName());
        person.setPhone(phone());
        person.setEmail(df.getEmailAddress());
        person.setAddress(address());
        return person;
    }

    public static Company company() {
        DataFactory df = new DataFactory();
        Company company = new Company();
        company.setDescription(df.getRandomWord(10));
        company.setEstablishedYear(2014);
        company.setName(df.getBusinessName());
        company.setType(df.getRandomWord(1));
        company.setUrl("https://www.google.com");
        company.setBudget(budget());
        company.setTimeline(timeline());
        return company;
    }

    private static TargetTimeLine timeline() {
        DataFactory df = new DataFactory();
        TargetTimeLine targetTimeLine = new TargetTimeLine();
        targetTimeLine.setMax(df.getRandomWord(5));
        targetTimeLine.setMin(df.getRandomWord(5));
        return targetTimeLine;
    }

    private static Budget budget() {
        Budget budget = new Budget();
        budget.setMax(2000L);
        budget.setMin(200L);
        return budget;
    }

    public static Quote updateQuoteEntity() {
        Quote quoteDto = quoteEntity();
        quoteDto.setId(UUID.randomUUID());
        return quoteDto;
    }

    public static Quote quoteEntity() {
        Quote quote = quoteDto();
        quote.setCreatedDate(LocalDateTime.now());
        quote.setUpdatedDate(LocalDateTime.now());
        return quote;
    }

}