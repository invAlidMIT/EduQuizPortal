package com.Exam.Backend.Controller;

import com.Exam.Backend.Config.JwtHelper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;
import com.Exam.Backend.Model.*;

import com.Exam.Backend.Repository.*;

@RestController
@RequestMapping("/auth")
public class authController {

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtHelper jwtHelper;

    @Autowired
    private userRepository userRepository;

    @Autowired
    private roleRepository roleRepository;

    private Logger logger= LoggerFactory.getLogger(authController.class);

    @PostMapping("/login")
    public ResponseEntity<jwtResponse> login(@RequestBody jwtRequest request) {

        this.doAuthenticate(request.getUsername(), request.getPassword());


        UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());
        String token = this.jwtHelper.generateToken(userDetails);

        jwtResponse response = jwtResponse.builder()
                .token(token)
                .username(userDetails.getUsername()).build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    private void doAuthenticate(String username, String password) {

        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(username, password);
        try {
            authenticationManager.authenticate(authentication);


        } catch (BadCredentialsException e) {
            throw new BadCredentialsException(" Invalid Username or Password  !!");
        }

    }

    @ExceptionHandler(BadCredentialsException.class)
    public String exceptionHandler() {
        return "Credentials Invalid !!";
    }


//    @PostMapping("/create")
//    public User createUser(User user, Set<userRole> userRoles) throws Exception {
//        User localUser=userRepository.findByUsername(user.getUsername());
//        if(localUser!=null){
//            System.out.println("User is already present!");
//            throw new Exception("User is already present!");
//        }else{
//            for(userRole userRole:userRoles){
//                roleRepository.save(userRole.getRole());
//            }
//            user.getUserRoles().addAll(userRoles);
//            localUser=this.userRepository.save(user);
//        }
//        return localUser;
//    }


}
