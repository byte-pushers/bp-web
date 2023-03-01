package software.bytepushers.bpweb.controller;

import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;
import software.bytepushers.bpweb.repository.RoleRepository;
import software.bytepushers.bpweb.model.dto.enums.AccountTypeEnum;
import software.bytepushers.bpweb.model.entity.Role;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static software.bytepushers.bpweb.config.security.SecurityConstants.ROLES_END_POINT;

/**
 * The rest endpoint implementation for the User operations
 */
@Log4j2
@RestController
@RequestMapping(ROLES_END_POINT)
public class RoleController {

    private final RoleRepository roleRepository;

    public RoleController(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    /**
     * The rest endpoint is responsible for creating/adding/saving the user details.
     */
    @PostMapping
    public void save() {
        Arrays.asList(AccountTypeEnum.values()).forEach(accountType -> {
            Optional<Role> accountOptional = this.roleRepository.findByName(accountType.getRoleName());
            Role role = accountOptional.orElseGet(Role::new);
            role.setName(accountType.getRoleName());
            this.roleRepository.save(role);
        });
    }

    /**
     * The rest endpoint implementation is responsible for fetching the all available roles.
     *
     * @return the list of roles.
     */
    @GetMapping
    public List<String> getRoles() {
        return this.roleRepository.findAll().stream().map(role -> {
            log.trace("Role: {}", role.getId());
            return role.getName();
        }).collect(Collectors.toList());
    }

    @DeleteMapping
    public void delete() {
        this.roleRepository.deleteAll();
    }

}
