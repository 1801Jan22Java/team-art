package com.revature.art.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.art.dao.AnimalDao;
import com.revature.art.dao.ApplicationDao;
import com.revature.art.dao.FileDao;
import com.revature.art.dao.MeetupDao;
import com.revature.art.dao.UserDao;
import com.revature.art.domain.Application;

@Service
public class ApplicationServiceImpl implements ApplicationService {

	// Don't move source code written by someone else. just call in your controller
	// method if you want to use it.
	@Autowired
	private AnimalDao animalDao;
	@Autowired
	private ApplicationDao applicationDao;
	@Autowired
	private FileDao fileDao;
	@Autowired
	private MeetupDao meetupDao;
	@Autowired
	private UserDao userDao;
 
	// Eric

	// Evan
	@Override
	public List<Application> getAdpAplcListByUserId(int userId) {
		List<Application> apps = applicationDao.getByUserId(userId);
		return apps;
	}
	// James

	// Gin
	@Override
	public Application updateApplication(Application a) {
		Application app = applicationDao.getById(a.getApplicationID());
		if (a.getAppStatus().equals("Approved") || a.getAppStatus().equals("Denied"))
			app.setAppStatus(a.getAppStatus());
		
		return app;
	}

	@Override
	public List<Application> getAdpAplcList() {
		List<Application> apps = applicationDao.getAll();
		return apps;
	}



}
