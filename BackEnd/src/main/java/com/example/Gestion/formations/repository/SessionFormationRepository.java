package com.example.Gestion.formations.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Gestion.formations.entities.SessionFormation;

@Repository
public interface SessionFormationRepository  extends JpaRepository<SessionFormation,Integer> {
	SessionFormation findById(int id);
}