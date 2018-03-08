package com.revature.art.service;

import java.util.HashMap;
import java.util.List;

import com.revature.art.domain.Meetup;

public interface MeetupService {

	// Eric

	// Evan

	// James

	// Gin
	public String addVisitorForm(HashMap<String, Object> visitorForm);
	public List<HashMap<String,Object>> getVisitorsNumberByYearMonth(String sDate);
	public List<Meetup> getVisitorsByDay(String sDate);
}
