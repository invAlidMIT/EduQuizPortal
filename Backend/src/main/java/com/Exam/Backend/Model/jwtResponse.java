package com.Exam.Backend.Model;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class jwtResponse {

    private String token;
    private String username;
}
