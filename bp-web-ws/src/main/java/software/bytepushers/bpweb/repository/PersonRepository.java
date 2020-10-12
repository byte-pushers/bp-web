package software.bytepushers.bpweb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import software.bytepushers.bpweb.model.entity.Person;

import java.util.UUID;

/**
 * Repository layer for the person's database operations.
 */
public interface PersonRepository extends JpaRepository<Person, UUID> {
}
