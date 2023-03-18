package software.bytepushers.bpweb;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import software.bytepushers.bpweb.model.dto.enums.AccountTypeEnum;
import software.bytepushers.bpweb.model.entity.AccountType;
import software.bytepushers.bpweb.repository.AccountTypeRepository;

/**
 * The spring boot application for the byte pushers web services.
 */
@SpringBootApplication
@EnableJpaAuditing
public class BpWebWsApplication {

    public static void main(String[] args) {
        SpringApplication.run(BpWebWsApplication.class, args);
    }

    @Bean public CommandLineRunner demoData(AccountTypeRepository repo) {
        return args -> {
            for (AccountTypeEnum accountTypeEnum : AccountTypeEnum.values()) {
                AccountType accountType = repo.findByName(accountTypeEnum.name());
                if (accountType == null) {
                    AccountType accountTypeSave = new AccountType();
                    accountTypeSave.setName(accountTypeEnum.name());
                    repo.save(accountTypeSave);
                }
            }
        };
    }

}