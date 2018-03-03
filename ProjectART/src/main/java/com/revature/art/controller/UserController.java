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
import com.revature.art.service.UserService;

 
@Controller
@CrossOrigin(origins = "*")
@RequestMapping("/api/user")
public class UserController {

	private static final Logger logger = LoggerFactory.getLogger(UserController.class);

	@Autowired
	ApplicationService animalService;
	@Autowired
	UserService userService;
	
	@PostMapping("/login")
	public String login(@RequestBody User user ) {
	 
		logger.debug("login: userInfo: " + user.toString());
		
		// check if exist email and right password 
		user = userService.getUserInfo(user);
		
		if (user.getName() == null || user.getName().equals("")) {
			logger.debug("return error!");
		} else {
		 
		}
		return "success";
	}
	@PostMapping("/register")
	public @ResponseBody User registerUser(@RequestBody User user ) {
		logger.debug("registerUser: userInfo: " + user.toString());
		int userId = userService.addUserInfo(user);
		user.setUserID(userId);
		return user;
	}
	
}
