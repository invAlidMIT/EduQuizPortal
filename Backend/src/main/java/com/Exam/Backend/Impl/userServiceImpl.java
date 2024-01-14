package com.Exam.Backend.Impl;

import com.Exam.Backend.Model.*;
import com.Exam.Backend.Service.*;
import com.Exam.Backend.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class userServiceImpl implements userService {
    @Autowired
    private userRepository userRepository;
    @Autowired
    private roleRepository roleRepository;

    @Override
    public User createUser(User user, Set<userRole> userRoles) throws Exception {
        User localUser=userRepository.findByUsername(user.getUsername());
        if(localUser!=null){
            System.out.println("User is already present!");
            throw new Exception("User is already present!");
        }else{
            for(userRole userRole:userRoles){
                roleRepository.save(userRole.getRole());
            }
            user.getUserRoles().addAll(userRoles);
            localUser=this.userRepository.save(user);
        }
        return localUser;
    }
}
