package com.Exam.Backend.Service;

import com.Exam.Backend.Model.*;

import java.util.List;
import java.util.Set;


public interface userService {

    public User createUser(User user, Set<userRole> userRoles) throws Exception;
    public User getUser(String username);
    public List<User> deleteUser(Long id);

    public List<User> getAllUsers();
    public User updateUser(Long id,User existUser) throws Exception;
}
