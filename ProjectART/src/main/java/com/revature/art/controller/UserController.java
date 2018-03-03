package com.revature.art.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.art.HomeController;
import com.revature.art.domain.User;
import com.revature.art.service.ApplicationService;

 
@Controller
@CrossOrigin(origins = "*")
public class UserController {

	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

	@Autowired
	ApplicationService animalService;
	
	@PostMapping("/api/user/login")
	public String login(@RequestBody User user ) {
		System.out.println("did you get here?");
		System.out.println("I got user Info: " + user.toString());
		return "success";
	}
	
}
