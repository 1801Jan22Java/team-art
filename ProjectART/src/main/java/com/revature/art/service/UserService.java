package com.revature.art.service;

import com.revature.art.domain.User;

public interface UserService {
	// Eric

	// Evan
	User getUserById(int userId);
	void updateUserInfo(User user);
	// James

	// Gin
	int addUserInfo(User user);
	User getUserInfo(User user);
}
