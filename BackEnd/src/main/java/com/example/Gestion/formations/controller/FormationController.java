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

import com.example.Gestion.formations.entities.Formation;
import com.example.Gestion.formations.repository.FormationRepository;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class FormationController {
	@Autowired
	FormationRepository formationRepository;
	
	@GetMapping(value ="/formations")
	public List<Formation> getAllFormation() {
		List<Formation> formation = formationRepository.findAll();
		
	  return formation;
	}
	
	@GetMapping(value ="/formation/{id}") //URL
	public Formation afficherUneFormation(@PathVariable int id){
		Formation Formation = formationRepository.findById(id);
			return Formation;
	}
	
	@PostMapping("/addFormation")
	public Formation createFormation( @RequestBody Formation Formation) {
	    return formationRepository.save(Formation);
	}
	
	
	@DeleteMapping("/deleteFormation/{id}")
	public void deleteFormationn(@PathVariable int id) {
		formationRepository.deleteById(id);
	}
	
	
	
	@PutMapping("/updateFormation/{id}")
	public Formation updateFormation(@PathVariable(value = "id") Integer Id,@RequestBody Formation formation) {
	          
		Formation F = formationRepository.findById(Id).orElseThrow(null);

	F.setBudget(formation.getBudget());
	F.setDuree(formation.getDuree());
	F.setNb_session(formation.getNb_session());
	F.setTitre(formation.getTitre());
	F.setType_formation(formation.getType_formation());
	F.setDomaine(formation.getDomaine());
	
		
	    F = formationRepository.save(F);
		return F;
	}
}
