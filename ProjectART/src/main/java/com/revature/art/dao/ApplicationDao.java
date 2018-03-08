package com.revature.art.dao;

import java.util.List;

import com.revature.art.domain.*;

public interface ApplicationDao {
	public List<Application> getAll();
	public Application getById(int id);
	public List<Application> getByUserId(int userId);
	public int add(Application a);
	public void delete(Application a);
	public void merge(Application a);
	public void saveOrUpdate(Application a);
	
	// Eric

	// Evan

	// James

	// Gin
	public int addApplication(Application a);
	public int checkIfApplicationExistOnAnimal(int AnimalID);
}