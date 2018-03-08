package com.revature.art.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.art.dao.AnimalDao;
import com.revature.art.dao.ApplicationDao;
import com.revature.art.dao.FileDao;
import com.revature.art.dao.MeetupDao;
import com.revature.art.dao.UserDao;
import com.revature.art.domain.Animal;

@Service
public class AnimalServiceImpl implements AnimalService {

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
	
	@Override
	public void testMethod() {
		
	}

	@Override
	public List<Animal> getAllAnimals() {
		List<Animal> animals = animalDao.getAll();
		return animals;
	}

	@Override
	public int addAnimal(Animal animal) {
		int animalID = animalDao.add(animal);
		return animalID;
	}
	
	@Override
	public void updateAnimal(Animal animal) {
		animalDao.saveOrUpdate(animal);
	}
}
