package com.example.pointer.repository;

import com.example.pointer.PointerApplicationTests;
import com.example.pointer.model.entity.User;
import com.example.pointer.model.entity.UserData;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public class UserDataRepositoryTest extends PointerApplicationTests {

    @Autowired
    private UserDataRepository userDataRepository;

    @Test
    public void create(){
        UserData userData = new UserData();

        userData.setEyePos(1.0);
        userData.setEyeBlink(1.0);
        userData.setNodRl(1);
        userData.setNodFr(1);
        userData.setStt("test");
        userData.setCreatedAt(LocalDateTime.now());
        userData.setCreatedBy("Adminuser");
        //userData.setUserId(1L);

        UserData newUserData = userDataRepository.save(userData);
    }

}
