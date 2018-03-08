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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.art.domain.Meetup;
import java.io.IOException;
import java.util.List;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.annotate.JsonAutoDetect.Visibility;
import org.codehaus.jackson.annotate.JsonMethod;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
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
	public ResponseEntity<List<Meetup>> postMeetupListById(@RequestBody int userId) {
		logger.debug("getInfo: userId: " + userId);
		List<Meetup> list = meetupService.getMeetupListByUserId(userId);
		logger.debug("meetup list: " + list.toString());
		return new ResponseEntity<List<Meetup>>(list, HttpStatus.OK);
	}
	
	@RequestMapping(value="/meetupListById", method=RequestMethod.GET)
	public ResponseEntity<List<Meetup>> getMeetupListByIds(@RequestParam("userID") int userId, Model map) throws JsonGenerationException, JsonMappingException, IOException {
		logger.debug("getInfo: userId: " + userId);
		List<Meetup> list = meetupService.getMeetupListByUserId(userId);
		logger.debug("meetup list: " + list.toString());
		HttpHeaders responseHeaders = new HttpHeaders();
		responseHeaders.setContentType(MediaType.APPLICATION_JSON_UTF8);
		ObjectMapper mapper = new ObjectMapper();
		return new ResponseEntity<List<Meetup>>(list, responseHeaders, HttpStatus.OK);
	}
	
	// James
	
	//Gin 
	@RequestMapping("/visitorForm")
	public @ResponseBody String submitVisitorForm(@RequestBody HashMap<String, Object> visitorForm) {
		// {meetuptime=13:00, meetupday=2018-01-03, animalID=2, userID=2}
		String msg = meetupService.addVisitorForm(visitorForm);
		System.out.println("msg" + msg);
		return msg;
	}
	
	@RequestMapping("/calendar")
	public @ResponseBody List<HashMap<String,Object>> getVisitorCalendar(@RequestParam("sDate") String sDate){
		List<HashMap<String,Object>> list =  meetupService.getVisitorsNumberByYearMonth(sDate);
		return list;
	}
	
	@RequestMapping("/visitorsByDay")
	public @ResponseBody List<Meetup> getVisitorsByDay(@RequestParam("sDate") String sDate){
		List<Meetup> list= meetupService.getVisitorsByDay(sDate);
		return list;
	}
}
