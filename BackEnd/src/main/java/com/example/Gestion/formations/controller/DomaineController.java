package com.example.Gestion.formations.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Gestion.formations.entities.Domaine;
import com.example.Gestion.formations.repository.DomaineRepository;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class DomaineController {
	@Autowired
	DomaineRepository domaineRepository;
	
	@GetMapping(value ="/Domaines")
	public List<Domaine> getAllDomaine() {
		List<Domaine> Domaines = domaineRepository.findAll();
		
	  return Domaines;
	}
	
	@GetMapping(value ="/Domaine/{id}") //URL
	public Domaine afficherUnOrganisme(@PathVariable int id){
		Domaine domaine = domaineRepository.findById(id);
			return domaine;
	}
	
	@PostMapping("/addDomaine")
	public Domaine createOrganisme( @RequestBody Domaine domaine) {
	    return domaineRepository.save(domaine);
	}
	
	
	@DeleteMapping("/deleteDomaine/{id}")
	public void deleteConsultation(@PathVariable int id) {
		domaineRepository.deleteById(id);
	}
	
	
	
	@PutMapping("/updateDomaine/{id}")
	public Domaine updateOrganisme(@PathVariable(value = "id") Integer Id,@RequestBody Domaine domaine) {
	          
		Domaine d = domaineRepository.findById(Id).orElseThrow(null);
	
	d.setLibelle(domaine.getLibelle());
	    
	    d = domaineRepository.save(d);
		return d;
	}
}
