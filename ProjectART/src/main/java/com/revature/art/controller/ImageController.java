package com.revature.art.controller;

import java.nio.file.Files;

import javax.servlet.annotation.MultipartConfig;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.revature.art.domain.Animal;
import com.revature.art.domain.File;
import com.revature.art.service.AnimalService;
import com.revature.art.service.ApplicationService;
import com.revature.art.service.ImageService;
import com.revature.art.service.MeetupService;
import com.revature.art.service.UserService;


@Controller
@CrossOrigin(origins = "*")
@RequestMapping("/api/image") 		// can't change url 
public class ImageController {

	private static final Logger logger = LoggerFactory.getLogger(ImageController.class);

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
	@PostMapping("/addImage")
	public @ResponseBody int addFile(@RequestBody File file){
		int imageID =imageService.addFile(file);
		logger.info(file.toString());
		return imageID;
	}
	//, headers = "'Content-Type': 'multipart/form-data'"
	//@RequestParam (value="file") MultipartFile file
	@PostMapping(value = "/physicalImage")
	public @ResponseBody String physicalFile(@RequestParam (value="file") MultipartFile file) {
		System.out.println("wootwoot");
		return "";
	}

	//Gin 

}
