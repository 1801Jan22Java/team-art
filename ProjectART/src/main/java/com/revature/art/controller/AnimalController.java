package com.revature.art.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.revature.art.HomeController;
import com.revature.art.service.ApplicationService;

@Controller
public class AnimalController {

	private static final Logger logger = LoggerFactory.getLogger(AnimalController.class);

	@Autowired
	ApplicationService animalService;
	
}
