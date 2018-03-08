package com.revature.art.service;

import java.util.HashMap;
import java.util.List;

import com.revature.art.domain.Animal;
import com.revature.art.domain.File;
public interface AnimalService {

	// Eric
	public Animal getAnimalByID(int animalID);
	// Evan

	// James
	public List<Animal> getAllAnimals();
	public int addAnimal(Animal animal);
	public void updateAnimal(Animal animal);
	
	
	// Gin
	public List<File> getAnimalsWithFile();
	public HashMap<String,Object> getAnimalWithFilesByAnimalID(int animalID);
	void testMethod();
}
