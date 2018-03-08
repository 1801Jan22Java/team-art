package com.revature.art.service;

import java.util.HashMap;
import java.util.List;

import com.revature.art.domain.Application;

public interface ApplicationService {

	// Eric
	Application updateApplication(Application a);
	
 
	// Evan
	List<Application> getAdpAplcListByUserId(int userId);

	// James

	// Gin
	List<Application> getAdpAplcList();
	String addAdoptionApplication(HashMap<String, Object> application);
}


