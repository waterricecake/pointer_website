package com.example.pointer.model.network.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDataApiResponse {

    private Long id;

    private Double eyePos;

    private Double eyeBlink;

    private Integer nodRl;

    private Integer nodFr;

    private String stt;

    private LocalDateTime createdAt;

    private String createdBy;
}
