package com.Exam.Backend.Service;

import com.Exam.Backend.Model.*;
import org.springframework.stereotype.Service;

import java.util.Set;


public interface userService {

    public User createUser(User user, Set<userRole> userRoles) throws Exception;
}
