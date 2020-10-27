package software.bytepushers.bpweb.utils;

import org.fluttercode.datafactory.impl.DataFactory;
import software.bytepushers.bpweb.model.dto.*;
import software.bytepushers.bpweb.model.entity.Quote;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

/**
 * Model/Dto class object generator
 */
public class ModelUtils {

    public static QuoteDto quoteDto() {
        DataFactory df = new DataFactory();
        PhoneDto phoneDto = PhoneDto.builder().number(df.getRandomWord(1)).type("string").build();
        AddressDto addressDto = AddressDto.builder()
                .street(List.of(df.getStreetName(), df.getStreetName())).city(df.getCity()).zip(df.getRandomWord(6))
                .state(df.getRandomWord(5)).country(df.getRandomChars(3)).county(df.getRandomChars(3)).build();
        PersonDto personDto = PersonDto.builder().firstName(df.getFirstName()).lastName(df.getLastName())
                .phone(phoneDto).email(df.getEmailAddress()).address(addressDto)
                .build();
        BudgetDto budgetDto = BudgetDto.builder().max(2000L).min(200L).build();
        TargetTimeLineDto targetTimeLineDto = TargetTimeLineDto.builder().max(df.getRandomWord(5))
                .min(df.getRandomWord(5)).build();
        CompanyDto companyDto = CompanyDto.builder().budget(budgetDto).timeline(targetTimeLineDto).description(df.getRandomWord(10))
                .name(df.getBusinessName()).type(df.getRandomWord(1)).establishedYear(2014).url("https://www.google.com").build();
        return QuoteDto.builder()
                .company(companyDto).contact(personDto)
                .projectPlatform(df.getRandomWord()).projectType(df.getRandomWord())
                .build();
    }

    public static QuoteDto updateQuoteDto() {
        QuoteDto quoteDto = quoteDto();
        quoteDto.setId(UUID.randomUUID());
        return quoteDto;
    }

    public static Quote quoteEntity() {
        Quote quote = ApplicationUtils.copyProperties(quoteDto(), Quote.class);
        quote.setCreatedDate(LocalDateTime.now());
        quote.setUpdatedDate(LocalDateTime.now());
        return quote;
    }


}
