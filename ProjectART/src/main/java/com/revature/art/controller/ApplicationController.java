package com.revature.art.controller;

import java.util.HashMap;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.art.HomeController;
import com.revature.art.domain.Animal;
import com.revature.art.domain.Application;
import com.revature.art.domain.User;
import com.revature.art.service.AnimalService;
import com.revature.art.service.ApplicationService;
import com.revature.art.service.ImageService;
import com.revature.art.service.MeetupService;
import com.revature.art.service.UserService;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping("/api/application") // can't change url
public class ApplicationController {

	private static final Logger logger = LoggerFactory.getLogger(ApplicationController.class);

	@Autowired
	ApplicationService applicationService;
	@Autowired
	AnimalService animalService;
	@Autowired
	ImageService imageService;
	@Autowired
	MeetupService meetupService;
	@Autowired
	UserService userService;

	// Eric

	// Evan
	@RequestMapping(value="/applicationListById", method=RequestMethod.POST)
	public @ResponseBody List<Application> getAdpAplcListById(@RequestBody int userId) {
		logger.debug("getInfo: userId: " + userId);
		List<Application> list = applicationService.getAdpAplcListByUserId(userId);
		System.out.println(list);
		logger.debug("application list: " + list.toString());
		return list;
	}
	// James

	// Gin
	@RequestMapping("/applicationList")
	public @ResponseBody List<Application> getApplications() {
		List<Application> list = applicationService.getAdpAplcList();
		logger.info(list.toString());
		return list;
	}
	
	@RequestMapping("/adoptApplication")
	public @ResponseBody String submitAdoptApplication(@RequestBody HashMap<String, Object> application) {
		System.out.println(application.toString());
		String msg = applicationService.addAdoptionApplication(application);
		return msg;
	}

}

