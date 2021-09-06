package com.example.Gestion.formations.entities;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;



@Entity

public class SessionFormation {
	 	@Id
	    @GeneratedValue(strategy= GenerationType.IDENTITY)
		private int id;
		private String lieu;
		private Date date_debut;
		private Date date_fin;
		private int nb_participants;
		
		@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL) 
		@JoinTable(name = "FormationParSession",
			joinColumns = { @JoinColumn(name = "sessionformation_id")},
			inverseJoinColumns = { @JoinColumn (name = "formation_id")})
		
		private Set<Formation> formations = new HashSet<>();
		
		
		@ManyToOne
	    @JoinColumn(name="id_formateur", nullable=false)
	    private Formateur formateur;


		@ManyToOne
	    @JoinColumn(name="id_organisme", nullable=false)
	    private Organisme organisme;
		
		
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getLieu() {
			return lieu;
		}
		public void setLieu(String lieu) {
			this.lieu = lieu;
		}
		public Date getDate_debut() {
			return date_debut;
		}
		public void setDate_debut(Date date_debut) {
			this.date_debut = date_debut;
		}
		public Date getDate_fin() {
			return date_fin;
		}
		public void setDate_fin(Date date_fin) {
			this.date_fin = date_fin;
		}
		public int getNb_participants() {
			return nb_participants;
		}
		public void setNb_participants(int nb_participants) {
			this.nb_participants = nb_participants;
		}
		
		public Formateur getFormateur() {
			return formateur;
		}
		public void setFormateur(Formateur formateur) {
			this.formateur = formateur;
		}
		public Set<Formation> getFormations() {
			return formations;
		}
		public void setFormations(Set<Formation> formations) {
			this.formations = formations;
		}
		
		public Organisme getOrganisme() {
			return organisme;
		}
		public void setOrganisme(Organisme organisme) {
			this.organisme = organisme;
		}
		public SessionFormation() {
			super();
			// TODO Auto-generated constructor stub
		}
		public SessionFormation(int id, String lieu, Date date_debut, Date date_fin, int nb_participants,
				Set<Formation> formations, Formateur formateur, Organisme organisme) {
			super();
			this.id = id;
			this.lieu = lieu;
			this.date_debut = date_debut;
			this.date_fin = date_fin;
			this.nb_participants = nb_participants;
			this.formations = formations;
			this.formateur = formateur;
			this.organisme = organisme;
		}
		


}
