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

import com.revature.art.domain.Meetup;
import com.revature.art.service.AnimalService;
import com.revature.art.service.ApplicationService;
import com.revature.art.service.ImageService;
import com.revature.art.service.MeetupService;
import com.revature.art.service.UserService;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping("/api/meetup") 		// can't change url 
public class MeetupController {

	private static final Logger logger = LoggerFactory.getLogger(MeetupController.class);

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
	@RequestMapping(value="/meetupListById", method=RequestMethod.POST)
	public @ResponseBody List<Meetup> getMeetupListById(@RequestBody int userId) {
		logger.debug("getInfo: userId: " + userId);
		List<Meetup> list = meetupService.getMeetupListByUserId(userId);
		logger.debug("meetup list: " + list.toString());
		System.out.println(list);
		return list;
	}
	// James
	
	//Gin 
}
