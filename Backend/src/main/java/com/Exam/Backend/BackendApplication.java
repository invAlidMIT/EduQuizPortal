package com.Exam.Backend;

import com.Exam.Backend.Impl.userServiceImpl;
import com.Exam.Backend.Model.Role;
import com.Exam.Backend.Model.User;
import com.Exam.Backend.Model.userRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashSet;
import java.util.Set;


@SpringBootApplication
public class BackendApplication{

	@Autowired
	private userServiceImpl userServiceImpl;
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}


}
