package com.revature.art.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.art.controller.AnimalController;
import com.revature.art.dao.AnimalDao;
import com.revature.art.dao.ApplicationDao;
import com.revature.art.dao.FileDao;
import com.revature.art.dao.MeetupDao;
import com.revature.art.dao.UserDao;
import com.revature.art.domain.User;

@Service
public class UserServiceImpl implements UserService{

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
	
	@Override
	public int addUserInfo(User user) {
		int userId = userDao.add(user);
		return userId;
	}
	
	@Override
	public User getUserInfo(User user) {
		// 1. check if exist user Id
		
		// 2. check if it's right password.
		List<User> user1= userDao.getUserByEmail(user.getEmail());
		if (user1.size() == 0) {
			logger.debug("user doesn't exist. wrong ID!");
		} else {
			 List<User> user2 = userDao.ifRightPassword(user);
			 if (user2.size() > 0) {
				 logger.debug("right password.");
				 user = user2.get(0);
			 }
		}
		return user;
	}
}
