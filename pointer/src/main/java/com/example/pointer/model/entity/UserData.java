package com.example.pointer.model.entity;

import lombok.*;
import lombok.experimental.Accessors;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@ToString(exclude = "user")
@Accessors(chain = true)
public class UserData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double eyePos;

    private Double eyeBlink;

    private Integer nodRl;

    private Integer nodFr;

    private String stt;

    private LocalDateTime createdAt;

    private String createdBy;

    @ManyToOne
    private User user;
}
