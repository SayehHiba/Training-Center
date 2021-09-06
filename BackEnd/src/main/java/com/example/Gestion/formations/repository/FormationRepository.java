package com.example.Gestion.formations.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Gestion.formations.entities.Formation;

@Repository
public interface FormationRepository  extends JpaRepository<Formation,Integer> {
	Formation findById(int id);
}