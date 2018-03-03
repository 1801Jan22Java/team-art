package com.revature.art.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.art.HomeController;
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

	// James

	// Gin
	@RequestMapping("/api/applicationList")
	public @ResponseBody List<Application> getApplications() {
		List<Application> list = applicationService.getAdpAplcList();
		logger.info(list.toString());
		return list;
	}

}
