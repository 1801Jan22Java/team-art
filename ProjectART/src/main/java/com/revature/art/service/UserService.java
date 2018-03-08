package com.revature.art.service;

import com.revature.art.domain.User;

public interface UserService {
	// Eric
	void updateInfo(User user);
	// Evan
	User getUserById(int userId);
	// James

	// Gin
	int addUserInfo(User user);
	User getUserInfo(User user);
}