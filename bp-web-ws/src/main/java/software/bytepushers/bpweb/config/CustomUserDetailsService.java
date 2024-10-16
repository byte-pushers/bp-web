package software.bytepushers.bpweb.config;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import software.bytepushers.bpweb.model.entity.User;
import software.bytepushers.bpweb.model.entity.Role;
import software.bytepushers.bpweb.repository.UserRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Customer user details service implementation for spring security.
 */
@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * The method implementation is responisble for loading the user by Username.
     *
     * @param username to get login
     * @return the application user details
     * @throws UsernameNotFoundException if user not found into the system
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> userOptional = this.userRepository.findByUsername(username);
        if (userOptional.isEmpty()) {
            throw new UsernameNotFoundException("User not Found.");
        }
        User user = userOptional.get();
        List<String> roles = user.getRoles().stream().map(Role::getName).collect(Collectors.toList());
        return new ApplicationUser(user.getUsername(), user.getPassword(), roles);
    }
}