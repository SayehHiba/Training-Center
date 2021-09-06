package com.example.Gestion.formations.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;



@Entity
public class Formation {
	
	//@Id
    //@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Id
    @GeneratedValue
    @Column(name="id", nullable = false)
	private int id ;
	private String titre;
	private String type_formation;
	private int nb_session;
	private int duree ;
	private double budget;
	
	@ManyToOne
    @JoinColumn(name="id_domaine", nullable=false)
    private Domaine domaine;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitre() {
		return titre;
	}
	public void setTitre(String titre) {
		this.titre = titre;
	}
	public String getType_formation() {
		return type_formation;
	}
	public void setType_formation(String type_formation) {
		this.type_formation = type_formation;
	}
	public int getNb_session() {
		return nb_session;
	}
	public void setNb_session(int nb_session) {
		this.nb_session = nb_session;
	}
	public int getDuree() {
		return duree;
	}
	public void setDuree(int duree) {
		this.duree = duree;
	}
	public double getBudget() {
		return budget;
	}
	public void setBudget(double budget) {
		this.budget = budget;
	}
	
	public Domaine getDomaine() {
		return domaine;
	}
	public void setDomaine(Domaine domaine) {
		this.domaine = domaine;
	}
	@Override
	public String toString() {
		return "Formation [id=" + id + ", titre=" + titre + ", type_formation=" + type_formation + ", nb_session="
				+ nb_session + ", duree=" + duree + ", budget=" + budget + ", domaine=" + domaine + "]";
	}
	public Formation(int id, String titre, String type_formation, int nb_session, int duree, double budget,
			Domaine domaine) {
		super();
		this.id = id;
		this.titre = titre;
		this.type_formation = type_formation;
		this.nb_session = nb_session;
		this.duree = duree;
		this.budget = budget;
		this.domaine = domaine;
	}
	public Formation() {
		super();
		// TODO Auto-generated constructor stub
	}


}
