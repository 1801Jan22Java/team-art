package com.revature.art;

import java.text.DateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.art.domain.Test;
import com.revature.art.domain.User;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	Map<String, User> users = new HashMap<String, User>();
	
	@PostConstruct
	public void initIt() throws Exception {
		User user1 = new User(1, "user1@gmail.com", "1234", "user1");
		User user2 = new User(1, "user2@gmail.com", "1234", "user2");
				
		users.put(user1.getEmail(), user1);
		users.put(user2.getEmail(), user2);
	}
	
	@GetMapping("/getUser")
	public void getMethod(@RequestParam("email") String email) {
		//  if you call the url >>>  http://localhost:8080/getUser?email=user2@gmail.com   
		System.out.println("Did email arrive here well?" + email);
		System.out.println("got the value!");
	}
	
	 
	//@RequestMapping(value="/userInfoPost", method = RequestMethod.POST, consumes = "application/json")
	@PostMapping("/userInfoPost")
	public String postMethod(@ModelAttribute User user) {
		System.out.println("are you coming to me?");
		System.out.println("I got user Info : " + user.toString());
		return "result";
	}
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);
		
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
		
		String formattedDate = dateFormat.format(date);
		
		model.addAttribute("serverTime", formattedDate );
		
		
		return "home";
		
	}
	
	@RequestMapping("/list")
	public @ResponseBody List<Test> getJson(){
		
		List<Test> tests = new ArrayList<Test>();
		tests.add( new Test("Test1", 10));
		tests.add( new Test("Test2", 20));
		tests.add(  new Test("Test3", 30));
		tests.add( new Test("Test4", 40));
		return tests;
	}
	
}
