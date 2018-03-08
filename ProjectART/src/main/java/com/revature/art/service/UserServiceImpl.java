<<<<<<< HEAD
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
=======
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

	@Override
	public User getUserById(int userId) {
		User user = userDao.getById(userId);
		return user;
	}
	
	// Eric
	
	@Override
	public void updateInfo(User user) {
		User u = userDao.getById(user.getUserID());
		if(!user.getEmail().equals("") && user.getEmail().length() < 50 && !u.getEmail().equals(user.getEmail().trim()))
			u.setEmail(user.getEmail().trim());
		if(!user.getName().equals("") && user.getName().length() < 35 && !u.getName().equals(user.getName().trim()))
			u.setName(user.getName().trim());
		if(!user.getPassword().equals("") && user.getPassword().length() < 25 && !u.getPassword().equals(user.getPassword().trim()))
			u.setPassword(user.getPassword().trim());
		userDao.saveOrUpdate(user);
	}
}
>>>>>>> b1a2109f4548614f504a0cdaf8f26895a4954793
