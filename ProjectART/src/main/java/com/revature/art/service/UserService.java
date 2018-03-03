package com.revature.art.service;

import com.revature.art.domain.User;

public interface UserService {

	int addUserInfo(User user);
	User getUserInfo(User user);
}
