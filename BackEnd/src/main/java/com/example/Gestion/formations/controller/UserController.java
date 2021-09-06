package com.example.Gestion.formations.controller;

import java.util.List;
import java.util.Set;

import com.example.Gestion.formations.entities.Role;
import com.example.Gestion.formations.entities.SessionFormation;
import com.example.Gestion.formations.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.Gestion.formations.controller.service.UserService;
import com.example.Gestion.formations.entities.User;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class UserController {

	@Autowired
	UserService userService;
	
	

	@GetMapping("/users")
	public List<User> getAllUser() {
		List<User> users = userService.findAll();

        return users;
	}


	@DeleteMapping("/supprimeruser/{id}")
	public void deleteUser(@PathVariable int id) {
		userService.delete(id);
	}
	
	

	@GetMapping(value ="/user/{id}") //URL
	public User afficherUser(@PathVariable int id){
		User user = userService.findById(id);
			return user;
	}


	
	@PutMapping("/updateuser/{id}")
	public User updateUser(@PathVariable(value = "id") int id,
						     @RequestBody User user)throws
			ResourceNotFoundException {
		Set<SessionFormation> newSet=user.getSessions();
		Set<Role> newSetR=user.getRoles();
        User u=userService.findOne(user.getUsername());

		User U=new User(user.get_idUser(),user.get_nom(),user.get_prenom(),user.get_numTel(),user.getUsername(),user.getPassword(),user.get_dateNaissance(),user.getProfil(),user.getType(),user.getPays(),newSet,newSetR);
		u.setSessions(U.getSessions());

	    return userService.save(u);
	}


	
	  @RequestMapping(value="/signup", method = RequestMethod.POST)
	    public User saveUser(@RequestBody User user){
	        return userService.save(user);
	    }
	  

	  
	  
		@GetMapping(value ="/getUser/{username}") //URL
		public User afficherUser(@PathVariable String username){
			User user = userService.findOne(username);
				return user;
		}
	
}

