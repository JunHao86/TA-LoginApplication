package com.loginapplication.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.loginapplication.model.User;
import com.loginapplication.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public User validateUser(String username, String password) {
        User user = userRepository.findByUsernameAndPassword(username, password);
        return user;
    }
        
    //Read singular user - used in @GetMapping("/user/{username}")
    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }
    
} 
