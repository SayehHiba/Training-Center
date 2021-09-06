package com.example.Gestion.formations.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Gestion.formations.entities.Formateur;
import com.example.Gestion.formations.repository.FormateurRepository;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class FormateurController {

	@Autowired
	FormateurRepository formateurRepository;
	
	@GetMapping("/formateurs")
	public List<Formateur> getAllFormateur() {
		List<Formateur> formateurs = formateurRepository.findAll();
		
	  return formateurs;
	}
		
	@GetMapping(value ="/formateur/{id}") //URL
  public Formateur afficherUnFormateur(@PathVariable int id) {
	  
	  Formateur formateur = formateurRepository.findById(id);
	  return formateur;
	  
  }
	@PostMapping("/addformateur")
	public Formateur createFomrateur(@RequestBody Formateur formateur) {
		return formateurRepository.save(formateur);
		
	}
	
	@DeleteMapping("/supprimereformateur/{id}")
	public void deleteConsultation(@PathVariable int id) {
		formateurRepository.deleteById(id);
		
	}
	
	@PutMapping("/updateformateur/{id}")
	public Formateur updateFormateur(@PathVariable(value = "id") Integer Id,@RequestBody Formateur formateur) {
	          
		Formateur f = formateurRepository.findById(Id).orElseThrow(null);
		
		formateur.setNom(formateur.getNom());
		formateur.setPrenom(formateur.getPrenom());
		formateur.setEmail(formateur.getEmail());
		formateur.setTel(formateur.getTel());
		formateur.setType(formateur.getType());
		
	f = formateurRepository.save(formateur);
	return formateur;
		
		
	}
}
