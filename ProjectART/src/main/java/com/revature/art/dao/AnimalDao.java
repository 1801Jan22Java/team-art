package com.revature.art.dao;

import java.util.List;

import com.revature.art.domain.*;

public interface AnimalDao {

	public List<Animal> getAll();
	public Animal getById(int id);
	public int add(Animal a);
	public void delete(Animal a);
	public void merge(Animal a);
	public void saveOrUpdate(Animal a);

	// Eric

	// Evan

	// James

	// Gin
	public int addAnimal(Animal a);
}
