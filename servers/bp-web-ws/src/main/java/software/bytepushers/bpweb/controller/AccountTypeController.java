package software.bytepushers.bpweb.controller;

import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import software.bytepushers.bpweb.model.dto.enums.AccountTypeEnum;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import software.bytepushers.bpweb.repository.AccountRepository;
import software.bytepushers.bpweb.model.entity.AccountType;

import static software.bytepushers.bpweb.config.security.SecurityConstants.ACCOUNT_TYPE_END_POINT;


/**
 * The rest endpoint implementations for the account types
 */
@Log4j2
@RestController
@RequestMapping(ACCOUNT_TYPE_END_POINT)
public class AccountTypeController {

    private final AccountRepository accountRepository;

    public AccountTypeController(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    /**
     * The rest endpoint is responsible for creating/adding/saving the account types into the system.
     */
    @PostMapping
    public void save() {
        Arrays.asList(AccountTypeEnum.values()).forEach(accountType -> {
            Optional<AccountType> accountOptional = this.accountRepository.findByName(accountType.name());
            if (accountOptional.isEmpty()) {
                AccountType account = new AccountType();
                account.setName(accountType.name());
                this.accountRepository.save(account);
            }
        });
    }

    /**
     * The rest endpoint implementation is responsible for fetching all the configured the account types.
     *
     * @return the list of account types.
     */
    @GetMapping
    public List<String> getAll() {
        return this.accountRepository.findAll().stream().map(accountType -> {
            log.trace("Account type: {}", accountType.getId());
            return accountType.getName();
        }).collect(Collectors.toList());
    }
}
