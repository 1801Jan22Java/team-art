package com.revature.art.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.art.dao.AnimalDao;
import com.revature.art.dao.ApplicationDao;
import com.revature.art.dao.ApplicationDaoImpl;
import com.revature.art.dao.FileDao;
import com.revature.art.dao.MeetupDao;
import com.revature.art.dao.UserDao;
import com.revature.art.domain.Animal;
import com.revature.art.domain.File;

@Service
public class AnimalServiceImpl implements AnimalService {

	private static final Logger logger = LoggerFactory.getLogger(AnimalServiceImpl.class);

	@Autowired
	private AnimalDao animalDao;
	@Autowired
	private ApplicationDao applicationDao;
	@Autowired
	private FileDao fileDao;
	@Autowired
	private MeetupDao meetupDao;
	@Autowired
	private UserDao userDao;
	


	//Eric
	@Override
	public Animal getAnimalByID(int animalID) {
		Animal animal = animalDao.getAnimalByAnimalID(animalID);
		System.out.println("am i getiing animal?:" + animal.toString());
		return animal;
	}
	// James
	@Override
	public List<Animal> getAllAnimals() {
		List<Animal> animals = animalDao.getAll();
		return animals;
	}
	@Override
	public int addAnimal(Animal animal) {
		int animalID = animalDao.addAnimal(animal);
		return animalID;
	}
	
	@Override
	public void updateAnimal(Animal animal) {
		animalDao.saveOrUpdate(animal);
	}
	//Gin
	// get multiple animals with a image 
	@Override
	public List<File> getAnimalsWithFile(String adoptStatus) {
		
		List<Animal> animals = new ArrayList<Animal>();
		if (adoptStatus.equals("All")) {
			animals = animalDao.getAll();
		} else {
			animals = animalDao.getAnimalsByStatus(adoptStatus);
		}
		List<File> list = new ArrayList<File>();
		
		for (Animal a : animals) {
			List<File> imgFiles = fileDao.getFileByAnimalId(a);
			if (imgFiles.size() > 0) {
				File imgFile = imgFiles.get(0);
				imgFile.setAnimal(a);
				list.add(imgFile);
			} else {
				File f = new File();
				f.setAnimal(a);
				f.setFilename("default.jpg");
				list.add(f);
			}
		}	
		return list;
	}
	
	
	//get an animal with multiple images
	@Override
	public HashMap<String,Object> getAnimalWithFilesByAnimalID(int animalID) {
		Animal a = animalDao.getAnimalByAnimalID(animalID);
		List<File> imgFiles = fileDao.getFileByAnimalId(a);
		HashMap<String,Object> map = new HashMap<String,Object>();
		map.put("animal", a);
		map.put("files", imgFiles);
		return map;
	}
	 
}

