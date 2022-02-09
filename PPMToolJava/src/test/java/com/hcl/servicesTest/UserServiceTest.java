package com.hcl.servicesTest;


import com.hcl.domain.User;
import com.hcl.repositories.UserRepository;
import com.hcl.services.UserService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
class UserServiceTests {

    @Autowired
    private UserService userServiceTest;

    @MockBean
    private UserRepository userRepositoryTest;

    @Test
    public void findAllUserTest(){
        long userTestId = 1;
        User testUser = new User();
        testUser.setId(userTestId);
        testUser.setUsername("t@test.com");
        testUser.setFullName("fake user");
        testUser.setPassword("password");

        when(userRepositoryTest.findAll()).thenReturn(Stream
                .of(testUser).collect(Collectors.toList()));

        Iterable<User> list=userServiceTest.findAll();

        for (User u:list) {
            System.out.println(u.getUsername());
            System.out.println(u.getFullName());
        }

    }

    @Test
    public void saveUserTest(){
        long userTestId = 1;
        User testUser = new User();
        testUser.setId(userTestId);
        testUser.setUsername("t@test.com");
        testUser.setFullName("fake user");
        testUser.setPassword("password");

        when(userRepositoryTest.save(Mockito.any(User.class))).thenReturn(testUser);

        User u = userServiceTest.saveUser(testUser);

        assertEquals("t@test.com", u.getUsername());
        assertEquals("fake user", u.getFullName());

    }

}