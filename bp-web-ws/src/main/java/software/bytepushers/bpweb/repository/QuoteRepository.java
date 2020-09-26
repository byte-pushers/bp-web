package software.bytepushers.bpweb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import software.bytepushers.bpweb.model.entity.Quote;

import java.util.UUID;

/**
 * Repository layer for the quote's database operations.
 */
public interface QuoteRepository extends JpaRepository<Quote, UUID> {
}
