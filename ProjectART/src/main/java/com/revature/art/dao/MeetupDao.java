package com.revature.art.dao;

import java.util.HashMap;
import java.util.List;

import com.revature.art.domain.Meetup;

public interface MeetupDao {
	public List<Meetup> getAll();
	public Meetup getById(int id);
	public int add(Meetup m);
	public void delete(Meetup m);
	public void merge(Meetup m);
	public void saveOrUpdate(Meetup m);
	
	// Gin
	public List<HashMap<String,Object>>  getNumberOfVisitors(String sDate);
	public List<Meetup>  getVisitorsByDay(String sDate);
}
