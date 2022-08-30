package com.example.pointer.repository;


import com.example.pointer.PointerApplicationTests;
import com.example.pointer.model.entity.User;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDateTime;

public class UserRepositoryTest extends PointerApplicationTests {

    @Autowired
    private UserRepository userRepository;

    @Test
    public void create(){

        User user = new User();

        user.setAccount("Test01");
        user.setPassword("Test01");
        user.setCreatedAt(LocalDateTime.now());
        user.setCreatedBy("ADMINUSER");

        User newUser = userRepository.save(user);

        Assertions.assertNotNull(newUser);
    }
}
