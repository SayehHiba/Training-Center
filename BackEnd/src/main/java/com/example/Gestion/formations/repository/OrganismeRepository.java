package com.example.Gestion.formations.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Gestion.formations.entities.Organisme;

@Repository
public interface OrganismeRepository  extends JpaRepository<Organisme,Integer> {
	Organisme findById(int id);
}