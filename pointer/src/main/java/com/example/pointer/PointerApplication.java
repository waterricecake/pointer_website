package com.example.pointer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
public class PointerApplication {

    public static void main(String[] args) {
        SpringApplication.run(PointerApplication.class, args);
    }

}
