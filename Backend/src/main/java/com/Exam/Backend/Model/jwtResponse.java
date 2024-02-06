package com.Exam.Backend.Model;

import lombok.*;

@Data
@Builder
public class jwtResponse {
    private String token;

    private String username;

    public jwtResponse(String token, String username) {
        this.token = token;
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public jwtResponse() {
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

}
