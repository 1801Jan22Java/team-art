package com.revature.dao;

import java.util.List;

import com.revature.domains.Application;

public interface ApplicationDao {
	public List<Application> getAll();
	public Application getById(int id);
	public int add(Application a);
	public void delete(Application a);
	public void merge(Application a);
	public void saveOrUpdate(Application a);
}