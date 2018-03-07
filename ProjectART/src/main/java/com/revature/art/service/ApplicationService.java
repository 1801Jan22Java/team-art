package com.revature.art.service;

import java.util.HashMap;
import java.util.List;

import com.revature.art.domain.Application;

public interface ApplicationService {

	// Eric
	Application updateApplication(Application a);
	//written by Gin but was commented out when I pulled
	List<Application> getAdpAplcList();
 
	// Evan

	// James

	// Gin
	String addAdoptionApplication(HashMap<String, Object> application);
}
