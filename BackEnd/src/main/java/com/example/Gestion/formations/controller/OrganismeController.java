package com.example.Gestion.formations.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.Gestion.formations.entities.Organisme;
import com.example.Gestion.formations.repository.OrganismeRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class OrganismeController {
	@Autowired
	OrganismeRepository organismeRepository;
	
	@GetMapping(value ="/organisme")
	public List<Organisme> getAllOrganisme() {
		List<Organisme> organismes = organismeRepository.findAll();
		
	  return organismes;
	}
	
	@GetMapping(value ="/organisme/{id}") //URL
	public Organisme afficherUnOrganisme(@PathVariable int id){
		Organisme organisme = organismeRepository.findById(id);
			return organisme;
	}
	
	@PostMapping("/addorganisme")
	public Organisme createOrganisme( @RequestBody Organisme organisme) {
	    return organismeRepository.save(organisme);
	}
	
	
	@DeleteMapping("/deleteorganisme/{id}")
	public void deleteConsultation(@PathVariable int id) {
		organismeRepository.deleteById(id);
	}
	
	
	
	@PutMapping("/updateorganisme/{id}")
	public Organisme updateOrganisme(@PathVariable(value = "id") Integer Id,@RequestBody Organisme organisme) {
	          
		Organisme o = organismeRepository.findById(Id).orElseThrow(null);
	
	    organisme.setLibelle(organisme.getLibelle());
	    
	    o = organismeRepository.save(organisme);
		return organisme;
	}
}

