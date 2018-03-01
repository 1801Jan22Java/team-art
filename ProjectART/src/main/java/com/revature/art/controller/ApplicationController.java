package com.revature.art.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.art.HomeController;
import com.revature.art.domain.Application;
import com.revature.art.service.MngAdpAplcService;

@Controller
public class EmpMngAdpAplcController {

	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

	@Autowired
	MngAdpAplcService mngAdpAplcService;
	
	@RequestMapping("/emp/AplcList")
	public @ResponseBody List<Application> getApplications(){
		List<Application> list = mngAdpAplcService.getAdpAplcList();
		logger.info(list.toString());
		return list;
	}
	
}
