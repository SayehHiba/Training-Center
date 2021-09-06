package com.example.Gestion.formations.entities;



import java.io.Serializable;
import java.sql.Date;
import java.util.Set;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="User")
public class User implements Serializable {

	
	@Id
    @GeneratedValue
    @Column(name="idUser", nullable = false)
    private int _idUser;
    private String _nom;
    private String _prenom;
    private int _numTel;
    private String username;
    private String password;
    private Date _dateNaissance;
    private String profil;
    private String type;
    private String pays;
    
    
    @ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "Participation", joinColumns = { 
			@JoinColumn(name = "user_id")}, inverseJoinColumns = { 
			@JoinColumn (name = "session_formation_id")})
    private Set<SessionFormation> sessions;
    
    
    
    public Set<SessionFormation> getSessions() {
		return sessions;
	}
	public void setSessions(Set<SessionFormation> sessions) {
		this.sessions = sessions;
	}
	public Set<Role> getRoles() {
		return roles;
	}
	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}
	@ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "USER_ROLES", joinColumns = {
            @JoinColumn(name = "USER_ID") }, inverseJoinColumns = {
            @JoinColumn(name = "ROLE_ID") })
    private Set<Role> roles;
    
    
	public int get_idUser() {
		return _idUser;
	}
	public void set_idUser(int _idUser) {
		this._idUser = _idUser;
	}
	public String get_nom() {
		return _nom;
	}
	public void set_nom(String _nom) {
		this._nom = _nom;
	}
	public String get_prenom() {
		return _prenom;
	}
	public void set_prenom(String _prenom) {
		this._prenom = _prenom;
	}
	public int get_numTel() {
		return _numTel;
	}
	public void set_numTel(int _numTel) {
		this._numTel = _numTel;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Date get_dateNaissance() {
		return _dateNaissance;
	}
	public void set_dateNaissance(Date _dateNaissance) {
		this._dateNaissance = _dateNaissance;
	}
	public String getProfil() {
		return profil;
	}
	public void setProfil(String profil) {
		this.profil = profil;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getPays() {
		return pays;
	}
	public void setPays(String pays) {
		this.pays = pays;
	}
	public User(int _idUser, String _nom, String _prenom, int _numTel, String username, String password,
			Date _dateNaissance, String profil, String type, String pays, Set<SessionFormation> sessions,
			Set<Role> roles) {
		super();
		this._idUser = _idUser;
		this._nom = _nom;
		this._prenom = _prenom;
		this._numTel = _numTel;
		this.username = username;
		this.password = password;
		this._dateNaissance = _dateNaissance;
		this.profil = profil;
		this.type = type;
		this.pays = pays;
		this.sessions = sessions;
		this.roles = roles;
	}
	@Override
	public String toString() {
		return "User [_idUser=" + _idUser + ", _nom=" + _nom + ", _prenom=" + _prenom + ", _numTel=" + _numTel
				+ ", username=" + username + ", password=" + password + ", _dateNaissance=" + _dateNaissance
				+ ", profil=" + profil + ", type=" + type + ", pays=" + pays + ", sessions=" + sessions + ", roles="
				+ roles + "]";
	}
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
		

  
	
    

    



	
	
	


	
	  

}
