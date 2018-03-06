package com.revature.art.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.art.dao.AnimalDao;
import com.revature.art.dao.ApplicationDao;
import com.revature.art.dao.FileDao;
import com.revature.art.dao.MeetupDao;
import com.revature.art.dao.UserDao;
import com.revature.art.domain.Meetup;

//Don't move source code written by someone else. just call in your controller
@Service
public class MeetupServiceImpl implements MeetupService {

private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);
	
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
	public List<Meetup> getMeetups() 
	{
		return meetupDao.getAll();
	}
	
	public Meetup approveDenyMeetup(Meetup m)
	{
		Meetup meetup = meetupDao.getById(m.getMeetupID());
		if (m.getMeetupStatus().equals("Approved") || m.getMeetupStatus().equals("Denied"))
		{
			meetup.setMeetupStatus(m.getMeetupStatus());
			meetupDao.saveOrUpdate(meetup);
		}
		return meetupDao.getById(meetup.getMeetupID());
	}
	
	// Evan

	// James

	// Gin
}
