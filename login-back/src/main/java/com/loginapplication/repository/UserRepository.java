package com.loginapplication.repository;

import org.springframework.data.repository.CrudRepository;

import com.loginapplication.model.User;

public interface UserRepository extends CrudRepository<User, Integer> {
    User findByUsername(String username);
    User findByUsernameAndPassword(String username, String password);
    boolean existsByUsername(String username);
}