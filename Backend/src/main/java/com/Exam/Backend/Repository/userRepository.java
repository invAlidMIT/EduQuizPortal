package com.Exam.Backend.Repository;

import com.Exam.Backend.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface userRepository extends JpaRepository<User,Long> {

    public User findByUsername(String username);
}
