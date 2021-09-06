package com.example.Gestion.formations.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.Gestion.formations.entities.User;

public interface UserRepository extends CrudRepository<User,Integer> {
	User findByUsername(String username);
}
