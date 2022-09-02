package com.example.pointer.controller;

import com.example.pointer.model.entity.User;
import com.example.pointer.model.network.Header;
import com.example.pointer.model.network.request.UserApiRequest;
import com.example.pointer.model.network.response.UserApiResponse;
import com.example.pointer.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api/create",method = RequestMethod.GET)
public class CreateAccountController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping(value = "/createAccount/")
    public String createAccount(@RequestParam String user_id, @RequestParam String user_pw) {
       Optional<User> optional = Optional.ofNullable(userRepository.findFirstByAccount(user_id));

        return optional.map(user->
                {
                    return "이미 있는 계정입니다";
                }
        ).orElseGet(()->{User user = User.builder()
                .account(user_id)
                .password(user_pw)
                .build();
        User newUser = userRepository.save(user);
        return "생성되었습니다";});


    }
}
