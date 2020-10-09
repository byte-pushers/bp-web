package software.bytepushers.bpweb.utils;

import org.fluttercode.datafactory.impl.DataFactory;
import software.bytepushers.bpweb.model.dto.*;
import software.bytepushers.bpweb.model.entity.Quote;

/**
 * Model/Dto class object generator
 */
public class ModelUtils {

    public static QuoteDto quoteDto() {
        DataFactory df = new DataFactory();
        AddressDto addressDto = AddressDto.builder()
                .street1(df.getStreetName()).city(df.getCity()).zip(df.getRandomWord(6))
                .state(df.getRandomWord(5)).country(df.getRandomChars(3)).build();
        PersonDto personDto = PersonDto.builder().firstName(df.getFirstName()).lastName(df.getLastName())
                .phone(df.getRandomWord(1)).email(df.getEmailAddress()).address(addressDto)
                .build();
        BudgetDto budgetDto = BudgetDto.builder().maxBudget(2000L).minBudget(200L).build();
        TargetTimeLineDto targetTimeLineDto = TargetTimeLineDto.builder().maxTimeLine(df.getRandomWord(5))
                .minTimeLine(df.getRandomWord(5)).build();
        CompanyDto companyDto = CompanyDto.builder().budget(budgetDto).timeline(targetTimeLineDto).description(df.getRandomWord(10))
                .name(df.getBusinessName()).type(df.getRandomWord(1)).url("https://www.google.com").build();
        return QuoteDto.builder()
                .company(companyDto).contact(personDto)
                .build();
    }

    public static Quote quoteEntity() {
        return ApplicationUtils.copyProperties(quoteDto(), Quote.class);
    }


}
