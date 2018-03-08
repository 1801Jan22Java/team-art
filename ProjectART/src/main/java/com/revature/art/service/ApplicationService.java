<<<<<<< HEAD
package com.revature.art.service;

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
	//List<Application> getAdpAplcList();
}
=======
package com.revature.art.service;

import java.util.List;

import com.revature.art.domain.Application;

public interface ApplicationService {

	// Eric
	Application updateApplication(Application a);
	//written by Gin but was commented out when I pulled
	List<Application> getAdpAplcList();
 
	// Evan
	List<Application> getAdpAplcListByUserId(int userId);
	// James

	// Gin
	//List<Application> getAdpAplcList();
}
>>>>>>> b1a2109f4548614f504a0cdaf8f26895a4954793
