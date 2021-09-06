package com.example.Gestion.formations.controller.service;

import java.util.List;

import com.example.Gestion.formations.entities.User;

public interface UserService {
	   List<User> findAll();
	    void delete(int id);
	    User findOne(String username);
	    User findById(int id);
		User save(User user);	

}
