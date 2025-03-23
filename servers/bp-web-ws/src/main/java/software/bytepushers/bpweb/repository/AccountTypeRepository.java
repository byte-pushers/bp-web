package software.bytepushers.bpweb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import software.bytepushers.bpweb.model.entity.AccountType;
import software.bytepushers.bpweb.model.entity.Quote;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 * Repository layer for the quote's database operations.
 */
public interface AccountTypeRepository extends JpaRepository<AccountType, UUID> {

    AccountType findByName(String name);

}
