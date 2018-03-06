package com.revature.art.service;

import java.util.HashMap;
import java.util.List;

import com.revature.art.domain.Animal;
import com.revature.art.domain.File;
public interface AnimalService {

	// Eric

	// Evan

	// James
	public List<Animal> getAllAnimals();
	
	// Gin
	public List<File> getAnimalsWithFile();
	public HashMap<String,Object> getAnimalWithFilesByAnimalID(int animalID);
}
