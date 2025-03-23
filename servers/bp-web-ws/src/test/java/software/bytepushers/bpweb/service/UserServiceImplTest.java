package software.bytepushers.bpweb.service;

import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import software.bytepushers.bpweb.exceptions.MalformedRequestException;
import software.bytepushers.bpweb.model.dto.UserDto;
import software.bytepushers.bpweb.model.entity.User;
import software.bytepushers.bpweb.repository.AccountRepository;
import software.bytepushers.bpweb.repository.RoleRepository;
import software.bytepushers.bpweb.repository.UserRepository;
import software.bytepushers.bpweb.service.impl.UserServiceImpl;
import software.bytepushers.bpweb.utils.ModelUtils;

import java.util.Optional;

import static software.bytepushers.bpweb.utils.TestConstants.USER_USERNAME;


/**
 * User service layer test case implementations
 */
@ExtendWith(MockitoExtension.class)
public class UserServiceImplTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private BCryptPasswordEncoder passwordEncoder;

    @Mock
    private RoleRepository roleRepository;

    @Mock
    private AccountRepository accountRepository;

    @InjectMocks
    private UserServiceImpl userServiceImpl;

    @Before
    public void before() {
        MockitoAnnotations.initMocks(this);
    }

    /**
     * The test case implementation to validate the save operation if all details are supplied..
     */
    @Test
    public void testUserSave() {
        UserDto userDto = ModelUtils.userDto();
        User userEntity = ModelUtils.userEntity();
        Mockito.when(this.userRepository.save(Mockito.any())).thenReturn(userEntity);
        this.userServiceImpl.save(userDto);
    }

    @Test(expected = MalformedRequestException.class)
    public void testUserSaveWithNull() {
        UserDto userDto = ModelUtils.userDto();
        userDto.setUser(null);
        this.userServiceImpl.save(userDto);
    }

    @Test
    public void testUserUpdateUsingUsername() {
        UserDto userDto = ModelUtils.userDto();
        User userEntity = ModelUtils.userEntity();
        Mockito.when(this.accountRepository.findByName(userDto.getType().name()))
                .thenReturn(Optional.of(userEntity.getAccountType()));
        Mockito.when(this.roleRepository.findByNameLike(userDto.getType().getRoleName()))
                .thenReturn(userEntity.getRoles().stream().findFirst());
        Mockito.when(this.userRepository.findByUsername(Mockito.anyString())).thenReturn(Optional.of(userEntity));
        Mockito.when(this.userRepository.save(Mockito.any())).thenReturn(userEntity);
        this.userServiceImpl.update(userDto);
    }

    @Test(expected = MalformedRequestException.class)
    public void testUserUpdateIfUserNotFoundUsingUsername() {
        UserDto userDto = ModelUtils.userDto();
        Mockito.when(this.userRepository.findByUsername(Mockito.anyString())).thenReturn(Optional.empty());
        this.userServiceImpl.update(userDto);
    }

    @Test
    public void testUserUpdateUsingUserId() {
        UserDto userDto = ModelUtils.userDto();
        User userEntity = ModelUtils.userEntity();
        userDto.getUser().setId(1L);
        Mockito.when(this.userRepository.findById(Mockito.anyLong())).thenReturn(Optional.of(userEntity));
        Mockito.when(this.userRepository.save(Mockito.any())).thenReturn(userEntity);
        this.userServiceImpl.update(userDto);
    }

    @Test(expected = MalformedRequestException.class)
    public void testUserUpdateIfUserNotFoundUsingUserId() {
        UserDto userDto = ModelUtils.userDto();
        userDto.getUser().setId(1L);
        Mockito.when(this.userRepository.findById(Mockito.anyLong())).thenReturn(Optional.empty());
        this.userServiceImpl.update(userDto);
    }

    @Test
    public void testUserDelete() {
        User userEntity = ModelUtils.userEntity();
        Mockito.when(this.userRepository.findById(Mockito.anyLong())).thenReturn(Optional.of(userEntity));
        this.userServiceImpl.delete(1L);
    }

    @Test(expected = MalformedRequestException.class)
    public void testUserDeleteIfNotFound() {
        Mockito.when(this.userRepository.findById(Mockito.anyLong())).thenReturn(Optional.empty());
        this.userServiceImpl.delete(1L);
    }

    @Test
    public void testUserByUsername() {
        User userEntity = ModelUtils.userEntity();
        Mockito.when(this.userRepository.findByUsername(userEntity.getUsername())).thenReturn(Optional.of(userEntity));
        this.userServiceImpl.getByUsername(userEntity.getUsername());
    }

    @Test(expected = MalformedRequestException.class)
    public void testUserByUsernameIfNotFound() {
        Mockito.when(this.userRepository.findByUsername(USER_USERNAME)).thenReturn(Optional.empty());
        this.userServiceImpl.getByUsername(USER_USERNAME);
    }
}
