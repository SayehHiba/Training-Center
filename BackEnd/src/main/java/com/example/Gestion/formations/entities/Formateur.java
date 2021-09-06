package com.example.Gestion.formations.entities;


import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="formateur")
public class Formateur implements Serializable{
	
	@Id
    @GeneratedValue
    @Column(name="idFormateur", nullable = false)
	private int  idFormateur;
	
	@Column
	private String nom;
	@Column
	private String prenom;
	@Column
	private String email;
	@Column
	private int tel;
	@Column
	private String type;
	
	public Formateur(int idFormateur, String nom, String prenom, String email, int tel, String type) {
		super();
		this.idFormateur = idFormateur;
		this.nom = nom;
		this.prenom = prenom;
		this.email = email;
		this.tel = tel;
		this.type = type;
	}
	public Formateur() {
		super();
	}
	
	
	public int getIdFormateur() {
		return idFormateur;
	}
	public void setIdFormateur(int idFormateur) {
		this.idFormateur = idFormateur;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getTel() {
		return tel;
	}
	public void setTel(int tel) {
		this.tel = tel;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
	@Override
	public String toString() {
		return "Formateur [idFormateur=" + idFormateur + ", nom=" + nom + ", prenom=" + prenom + ", email=" + email
				+ ", tel=" + tel + ", type=" + type + "]";
	}
	
	
	}