package com.revature.art.util;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.revature.art.controller.ApplicationController;

@Aspect
//@Component(value="loginAspect")
public class LoginAspect {

	private static final Logger logger = LoggerFactory.getLogger(LoginAspect.class);
	
	//@Before(pointcut="within(com.revature.art.controller.*)")
	public void logBefore(JoinPoint jp){
		//log.info(jp.getSignature());
		// session을 확인해서 
	}
}
