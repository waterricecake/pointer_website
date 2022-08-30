package com.example.pointer.model.network.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Accessors(chain = true)
public class UserDataApiRequest {

    private Long id;

    private Double eyePos;

    private Double eyeBlink;

    private Integer nodRl;

    private Integer nodFr;

    private String stt;

    private LocalDateTime createdAt;

    private String createdBy;
}
