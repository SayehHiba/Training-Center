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

import com.example.Gestion.formations.entities.SessionFormation;
import com.example.Gestion.formations.repository.SessionFormationRepository;


@CrossOrigin(origins = "*", maxAge = 3600)
	@RestController
	public class SessionFormationController {
		@Autowired
		SessionFormationRepository SessionformationRepository;
		
		@GetMapping(value ="/Sessionformations")
		public List<SessionFormation> getAllSessionformation() {
			List<SessionFormation> Sessionformation = SessionformationRepository.findAll();
			
		  return Sessionformation;
		}
		
		@GetMapping(value ="/Sessionformation/{id}") //URL
		public SessionFormation afficherUneSessionformation(@PathVariable int id){
			SessionFormation Sessionformation = SessionformationRepository.findById(id);
				return Sessionformation;
		}
		
		@PostMapping("/addSessionformation")
		public SessionFormation createSessionformation( @RequestBody SessionFormation Sessionformation) {
		    return SessionformationRepository.save(Sessionformation);
		}
		
		
		@DeleteMapping("/deleteSessionformation/{id}")
		public void deleteSessionformation(@PathVariable int id) {
			SessionformationRepository.deleteById(id);
		}
		
		
		
		@PutMapping("/updateSessionformation/{id}")
		public SessionFormation updateSessionformation(@PathVariable(value = "id") Integer Id,@RequestBody SessionFormation sessionformation) {
		          
			SessionFormation S = SessionformationRepository.findById(Id).orElseThrow(null);
	
		S.setDate_debut(sessionformation.getDate_debut());
		S.setDate_fin(sessionformation.getDate_fin());
		S.setLieu(sessionformation.getLieu());
		S.setNb_participants(sessionformation.getNb_participants());
		S.setOrganisme(sessionformation.getOrganisme());
		S.setFormations(sessionformation.getFormations());
		S.setFormateur(sessionformation.getFormateur());
		
		S = SessionformationRepository.save(S);
		    
			return S;
		}
	}