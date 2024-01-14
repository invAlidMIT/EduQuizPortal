package com.Exam.Backend.Service;

import com.Exam.Backend.Model.*;

import java.util.Set;

public interface userService {

    public User createUser(User user, Set<userRole> userRoles);
}
