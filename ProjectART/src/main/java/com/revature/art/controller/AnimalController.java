package com.revature.art.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.art.HomeController;
import com.revature.art.domain.Animal;
import com.revature.art.domain.Application;
import com.revature.art.domain.File;
import com.revature.art.service.AnimalService;
import com.revature.art.service.ApplicationService;
import com.revature.art.service.ImageService;
import com.revature.art.service.MeetupService;
import com.revature.art.service.UserService;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping("/api/animal") // can't change url
public class AnimalController {

	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
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
	@RequestMapping("/animalList")
	public @ResponseBody List<Animal> getAnimals(){
		List<Animal> list = animalService.getAllAnimals();
		logger.info(list.toString());
		System.out.println("success!");
		return list;
	}
	
	// Gin
	@RequestMapping(value="/animalsWithFile", method=RequestMethod.GET)
	public @ResponseBody List<File> getAnimalsWithFile(){
		List<File> list = animalService.getAnimalsWithFile();
		return list;
	}
	
	@RequestMapping(value="/animalWithFiles", method=RequestMethod.GET)
	public @ResponseBody HashMap<String,Object> getAnimalWithFiles(@RequestParam("animalID") int animalID){
		HashMap<String,Object> map = animalService.getAnimalWithFilesByAnimalID(animalID);
		return map;
	}

}
