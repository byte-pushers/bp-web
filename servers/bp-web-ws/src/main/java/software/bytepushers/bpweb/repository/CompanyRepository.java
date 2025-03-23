package software.bytepushers.bpweb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import software.bytepushers.bpweb.model.entity.Company;

import java.util.UUID;

/**
 * The repository layer for the company's database operations.
 */
public interface CompanyRepository extends JpaRepository<Company, UUID> {
}