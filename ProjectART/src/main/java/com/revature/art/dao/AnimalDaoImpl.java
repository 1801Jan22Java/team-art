package com.revature.art.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.Transaction;

import org.hibernate.criterion.Restrictions;

import org.springframework.stereotype.Repository;

import com.revature.art.util.HibernateUtil;
import com.revature.art.domain.*;
 
@Repository
public class AnimalDaoImpl implements AnimalDao{
	
	@Override
	public List<Animal> getAll() {
		Session s = HibernateUtil.getSession();
		List<Animal> animals = s.createQuery("from Animal").list();
		s.close();
		return animals;
	}

	@Override
	public Animal getById(int id) {
		Session s = HibernateUtil.getSession();


		Transaction tx = s.beginTransaction();
		Animal animal = (Animal) s.get(Animal.class, id);
		tx.commit();
		s.close();

		return animal;
	}

	@Override
	public int add(Animal animal) {

		Session s = HibernateUtil.getSession();
		Transaction tx = s.beginTransaction();
		s.save(animal);
		tx.commit();
		s.close();

		return (Integer) HibernateUtil.getSession().save(animal);
	}

	@Override
	public void delete(Animal animal) {
		HibernateUtil.getSession().delete(animal);
	}

	@Override
	public void merge(Animal animal) {
		HibernateUtil.getSession().merge(animal);
	}

	@Override
	public void saveOrUpdate(Animal animal) {

		Session s = HibernateUtil.getSession();
		Transaction tx = s.beginTransaction();
		s.saveOrUpdate(animal);
		tx.commit();
		//s.flush();
		s.close();
		System.out.println(animal.toString());


		HibernateUtil.getSession().saveOrUpdate(animal);

	}
	
	// Eric

	// Evan

	// James

	// Gin
	@Override
	public int addAnimal(Animal a) {
		Session s = HibernateUtil.getSession();
		Transaction tx = s.beginTransaction();
		int animalID = (Integer) s.save(a);
		tx.commit();
		s.close();
		return animalID;
	}
	
	@Override
	public Animal getAnimalByAnimalID(int animalID) {
		Session s = HibernateUtil.getSession();
		Criteria c = s.createCriteria(Animal.class).add(Restrictions.eq("animalID", animalID));
		Animal a = (Animal )c.uniqueResult();
		s.close();
		return a;
	}
}
