package com.Exam.Backend.Impl;

import com.Exam.Backend.Model.*;
import com.Exam.Backend.Service.*;
import com.Exam.Backend.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
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

    @Override
    public User getUser(String username) {
        return this.userRepository.findByUsername(username);
    }

    @Override
    public List<User> deleteUser(Long id) {
        this.userRepository.deleteById(id);
        return this.userRepository.findAll();
    }

    @Override
    public List<User> getAllUsers() {
        return this.userRepository.findAll();
    }

    @Override
    public User updateUser(Long id,User existUser) throws Exception {
      Optional<User> Optionaluser=this.userRepository.findById(id);
      if(Optionaluser.isPresent()){
          User user=Optionaluser.get();
          user.setUsername(existUser.getUsername());
          user.setFirstName(existUser.getFirstName());
          user.setLastName(existUser.getLastName());
          user.setEmail(existUser.getEmail());
          user.setPhone(existUser.getPhone());
          user.setPassword(existUser.getPassword());
          user.setProfile(existUser.getProfile());
          return this.userRepository.save(user);
      }
      else {
          throw new Exception("User not found with id "+id);
      }

    }
}
