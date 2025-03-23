package software.bytepushers.bpweb.utils;

import org.fluttercode.datafactory.impl.DataFactory;
import software.bytepushers.bpweb.model.dto.HubSpotContactDto;
import software.bytepushers.bpweb.model.dto.LoginDto;
import software.bytepushers.bpweb.model.dto.UserDetailsDto;
import software.bytepushers.bpweb.model.dto.UserDto;
import software.bytepushers.bpweb.model.dto.enums.AccountTypeEnum;
import software.bytepushers.bpweb.model.entity.*;

import java.time.LocalDateTime;
import java.util.*;

import static software.bytepushers.bpweb.utils.TestConstants.*;

/**
 * Model/Dto class object generator
 */
public class ModelUtils {

    public static Quote quoteDto() {
        DataFactory df = new DataFactory();
        Quote quote = new Quote();
        quote.setDescription(df.getRandomWord(10));
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
        company.setEstablishedYear(2014);
        company.setName(df.getBusinessName());
        company.setType(df.getRandomWord(1));
        company.setUrl("https://www.google.com");
        company.setBudget(budget());
        company.setFoundation(df.getBusinessName());
        company.setIsEstablished(true);
        company.setTimeline(timeline());
        return company;
    }

    private static TargetTimeLine timeline() {
        DataFactory df = new DataFactory();
        TargetTimeLine targetTimeLine = new TargetTimeLine();
        targetTimeLine.setMax((long) df.getNumberBetween(0, 1000));
        targetTimeLine.setMin((long) df.getNumberBetween(0, 1000));
        targetTimeLine.setIsMaxFinite(true);
        return targetTimeLine;
    }

    private static Budget budget() {
        Budget budget = new Budget();
        budget.setMax(2000L);
        budget.setMin(200L);
        budget.setIsMaxFinite(true);
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

    public static UserDto userDto() {
        UserDto userDto = new UserDto();
        UserDetailsDto userDetailsDto = new UserDetailsDto();
        AccountTypeEnum accountType = AccountTypeEnum.PREMIUM;
        userDetailsDto.setRoles(Collections.singletonList(accountType.getRoleName()));
        userDetailsDto.setEmail(USER_EMAIL);
        userDetailsDto.setFirstName(USER_FIRST_NAME);
        userDetailsDto.setLastName(USER_LAST_NAME);
        userDetailsDto.setPassword(USER_PASSWORD);
        userDetailsDto.setPhone(USER_PHONE);
        userDetailsDto.setState(USER_STATE);
        userDetailsDto.setUsername(USER_USERNAME);
        userDto.setType(accountType);
        userDto.setUser(userDetailsDto);
        return userDto;
    }

    public static User userEntity() {
        User userEntity = new User();
        UserDto userDto = userDto();
        //ApplicationUtils.copyPropertiesForTest(userDto, userEntity);

        userEntity.setEmail(USER_EMAIL);
        userEntity.setFirstName(USER_FIRST_NAME);
        userEntity.setLastName(USER_LAST_NAME);
        userEntity.setPassword(USER_PASSWORD);
        userEntity.setPhone(USER_PHONE);
        userEntity.setState(USER_STATE);
        userEntity.setUsername(USER_USERNAME);

        AccountType accountType = new AccountType();
        accountType.setName(userDto.getType().name());
        Role role = new Role();
        role.setName(userDto.getType().getRoleName());
        userEntity.setId(1L);
        userEntity.setAccountType(accountType);
        userEntity.setPassword(USER_BCRYPT_ENCODED_PASSWORD);
        userEntity.setRoles(Collections.singleton(role));
        return userEntity;
    }

    public static Role role() {
        Role role = new Role();
        role.setId(1L);
        role.setName(AccountTypeEnum.GUEST.name());
        return role;
    }

    public static LoginDto loginDto() {
        LoginDto loginDto = new LoginDto();
        loginDto.setUsername(USER_USERNAME);
        loginDto.setPassword(USER_PASSWORD);
        return loginDto;
    }

    public static AccountType accountType() {
        AccountType accountType = new AccountType();
        accountType.setId(1L);
        accountType.setName(AccountTypeEnum.GUEST.name());
        return accountType;
    }

    public static HubSpotContactDto hubspotContactEntity() {
        HubSpotContactDto hubSpotContactDto = new HubSpotContactDto();
        hubSpotContactDto.setFirstname(USER_FIRST_NAME);
        hubSpotContactDto.setLastname(USER_LAST_NAME);
        hubSpotContactDto.setEmail(USER_EMAIL);
        hubSpotContactDto.setCompany(USER_COMPANY);
        hubSpotContactDto.setConsent(true);
        hubSpotContactDto.setLandingPageCategory(USER_COMPANY);
        return hubSpotContactDto;
    }

    public static Map hubspotContactResponseEntity() {
        Map hubspotContactResponse = new HashMap();
        hubspotContactResponse.put(HUBSPOT_RESPONSE_ID, HUBSPOT_RESPONSE_ID_VALUE);
        return hubspotContactResponse;
    }
}

