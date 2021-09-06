package com.example.Gestion.formations.entities;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


	
	@Entity
	public class Domaine {
		@Id 
		@GeneratedValue(strategy= GenerationType.IDENTITY)
	    private int id;
	    private String libelle;


	
	  
		
	    public int getId() {
	        return id;
	    }

	    public void setId(int id) {
	        this.id = id;
	    }

	   
	 
	    public String getLibelle() {
	        return libelle;
	    }

	    public void setLibelle(String libelle) {
	        this.libelle = libelle;
	    }


		public Domaine() {
			super();
		}

		public Domaine(int id, String libelle) {
			super();
			this.id = id;
			this.libelle = libelle;
		}

		@Override
		public String toString() {
			return "Domaine [id=" + id + ", libelle=" + libelle + "]";
		}

		

}


