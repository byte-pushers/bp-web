package software.bytepushers.bpweb.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import software.bytepushers.bpweb.model.entity.User;

import java.util.Optional;

/**
 * User repository layer.
 */
public interface UserRepository extends JpaRepository<User, Long> {

    /**
     * Fetching the user details base on the username.
     *
     * @param username to use as a where clause
     * @return the user details if found
     */
    Optional<User> findByUsername(String username);

    /**
     * Fetching the user details base on the email.
     *
     * @param email to use as a where clause
     * @return the user details if found
     */
    Optional<User> findByEmail(String email);

}
