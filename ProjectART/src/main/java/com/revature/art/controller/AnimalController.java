
package com.revature.art.controller;

import java.util.List;

import org.hibernate.Transaction;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.art.HomeController;
import com.revature.art.domain.Animal;
import com.revature.art.domain.Application;
import com.revature.art.service.AnimalService;
import com.revature.art.service.ApplicationService;
import com.revature.art.service.ImageService;
import com.revature.art.service.MeetupService;
import com.revature.art.service.UserService;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping("/api/animal") // can't change url
public class AnimalController {

	private static final Logger logger = LoggerFactory.getLogger(AnimalController.class);
	
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
	@RequestMapping(value="/getAnimalById", method=RequestMethod.POST)
	public @ResponseBody Animal getAnimalById(@RequestBody int animalId) {
		logger.debug("getAnimalById: animalId: 	" + animalId);
		Animal animal = animalService.getAnimalById(animalId);
		logger.debug("Animal info:" + animal.toString());
		return animal;
	}
	
	// Evan

	// James
	@RequestMapping("/animalList")
	public @ResponseBody List<Animal> getAnimals(){
		List<Animal> list = animalService.getAllAnimals();
		logger.info(list.toString());
		System.out.println("success!");
		return list;
	}
	
	@PostMapping("/addAnimal")
	public @ResponseBody Animal addAnimal(@RequestBody Animal animal){
		int animalID = animalService.addAnimal(animal);
		logger.info(animal.toString());
		Animal animalFinal = animalService.getAnimalByID(animalID);
		return animalFinal;
	}
	
	@PostMapping("/updateAnimal")
	public @ResponseBody void updateAnimal(@RequestBody Animal animal){
		animalService.updateAnimal(animal);
		logger.info(animal.toString());
	}
	
	// Gin
}

