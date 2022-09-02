package com.example.pointer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PageController {

    @RequestMapping("/home")
    public String home(){
        return "index.html";
    }

    @RequestMapping("/login")
    public String login(){return "login.html";}

    @RequestMapping("/signup")
    public String singup(){return "signup.html";}

    @RequestMapping("/questions")
    public String questions(){return "questions.html";}

    @RequestMapping("/report")
    public String report(){return "report.html";}

    @RequestMapping("/script")
    public String script(){return "script.html";}

    @RequestMapping("/interview")
    public String interview(){return "interview.html";}

    @RequestMapping("/loading")
    public String loading(){return "loading.html";}

    @RequestMapping("/result")
    public String result(){return "result.html";}
}