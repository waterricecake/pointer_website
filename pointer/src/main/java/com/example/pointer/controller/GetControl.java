package com.example.pointer.controller;

import com.example.pointer.model.entity.User;
import com.example.pointer.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/login")
public class GetControl {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/getParameter")
    public String getParmeter(@RequestParam String user_id, @RequestParam String user_pw){

        Optional<User> optional = Optional.ofNullable(userRepository.findFirstByAccount(user_id));

        return optional.map(user ->{
            if (user_pw.equals(user.getPassword())) {
            return "login";
            }else{
                return "fail";
            }
            }).orElseGet(()->"데이터 없음");
        }
    }
