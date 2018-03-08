package com.revature.art.service;

import java.util.HashMap;
import java.util.List;

import com.revature.art.domain.Application;

public interface ApplicationService {

	// Eric
	Application approveDenyApplication(Application a);
	Application updateApplication(Application a);
	//written by Gin but was commented out when I pulled
	List<Application> getAdpAplcList();
 
	// Evan
	List<Application> getAdpAplcListByUserId(int userId);

	// James

	// Gin
	String addAdoptionApplication(HashMap<String, Object> application);
}


