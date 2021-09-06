package com.example.Gestion.formations.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Gestion.formations.entities.Domaine;

@Repository
	public interface DomaineRepository  extends JpaRepository<Domaine,Integer> {
		Domaine findById(int id);
	}
	
