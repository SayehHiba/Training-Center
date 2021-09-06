package com.example.Gestion.formations.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Gestion.formations.entities.Formateur;

@Repository
public interface FormateurRepository  extends JpaRepository<Formateur,Integer> {
	Formateur findById(int id);
}