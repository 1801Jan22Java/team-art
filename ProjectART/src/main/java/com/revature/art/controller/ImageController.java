package com.revature.art.controller;

import java.io.BufferedOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import org.springframework.web.multipart.MultipartRequest;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.revature.art.dao.AnimalDao;

import com.revature.art.domain.Animal;
//import com.revature.art.domain.File;
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
		//int imageID =imageService.addFile(file);
		logger.info(file.toString());
		return 0;

	}
	//, headers = "'Content-Type': 'multipart/form-data'"
	//@RequestParam (value="file") MultipartFile file
	@PostMapping(value = "/physicalImage")
	public @ResponseBody String physicalFile(final HttpServletRequest request,
			@RequestParam (value="file") List<MultipartFile> files, 
			Model model) throws IOException {

		 String animalID = request.getParameter("animalID");
		int aID=   Integer.parseInt(animalID);
		Animal a = animalService.getAnimalByID(aID);
		System.out.println("am I getting animalID?  "+animalID);
		//String directory = "C:\\ART Project\\ProjectART\\src\\main\\webapp\\WEB-INF\\images\\";
		String directory = "C:\\GitRepos\\1801-Jan22-java\\team-art\\team-art\\ProjectART\\src\\main\\webapp\\resources\\image"; //Gin!

		int maxSize = 1024 * 1024 * 20;
		String encoding = "UTF-8";
		//MultipartRequest multiRequest = new MultipartRequest(file, directory, maxSize, encoding);
		Iterator<MultipartFile> itr = files.iterator();
		while(itr.hasNext()) {
			MultipartFile file = (MultipartFile)itr.next();
		/*	if (!file.getOriginalFilename().isEmpty()) {*/
	            BufferedOutputStream outputStream = new BufferedOutputStream(
	                  new FileOutputStream(
	                        new File(directory, file.getOriginalFilename())));
	            
	            com.revature.art.domain.File f = new com.revature.art.domain.File();
	            System.out.println(model.toString());
	            String filename = file.getOriginalFilename();
	            
	            f.setAnimal(a);
	            f.setFilename(filename);
	            imageService.addFile(f);
	            
	            outputStream.write(file.getBytes());
	            outputStream.flush();
	            outputStream.close();
	        /* } else {
	            model.addAttribute("msg", "Please select at least one file..");
	            return "fileUploadForm";
	         }*/
		}
		System.out.println("wootwoot");
		return "";
	}

}
