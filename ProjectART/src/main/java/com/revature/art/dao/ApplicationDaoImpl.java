package com.revature.art.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import com.revature.art.controller.ApplicationController;
import com.revature.art.domain.Application;
import com.revature.art.util.HibernateUtil;

@Repository
public class ApplicationDaoImpl implements ApplicationDao{
	
	private static final Logger logger = LoggerFactory.getLogger(ApplicationDaoImpl.class);

	@Override
	public List<Application> getAll() {
		Session s = HibernateUtil.getSession();
		List<Application> a = s.createQuery("from Application").list();
		s.close();
		return a;
	}
	
	@Override
	public List<Application> getByUserId(int userId){
		Session s = HibernateUtil.getSession();
		Query q = s.createQuery("from Application app where app.user.userID = :userId");
		q.setParameter("userId", userId);
		List<Application> a = q.list();
		return a;
	}

	@Override
	public Application getById(int id) {
		Session s = HibernateUtil.getSession();
		Application a = (Application) s.get(Application.class, id);
		return a;
	}

	@Override
	public int add(Application a) {
		return (Integer) HibernateUtil.getSession().save(a);
	}

	@Override
	public void delete(Application a) {
		HibernateUtil.getSession().delete(a);
	}

	@Override
	public void merge(Application a) {
		HibernateUtil.getSession().merge(a);
	}

	@Override
	public void saveOrUpdate(Application a) {
		HibernateUtil.getSession().saveOrUpdate(a);
	}
	
	// Eric

	// Evan

	// James

	// Gin
	@Override
	public int addApplication(Application a) {
		Session s = HibernateUtil.getSession();
		Transaction tx = s.beginTransaction();
		int applicationID = (Integer) s.save(a);
		tx.commit();
		s.close();
		return applicationID;
	}
	
	@Override
	public int checkIfApplicationExistOnAnimal(int AnimalID) {
		Session s = HibernateUtil.getSession();
		int applCnt = (Integer)s.createCriteria(Application.class)
				.add(Restrictions.eq("animal", AnimalID)).setProjection(Projections.rowCount()).uniqueResult();
		s.close();
		return applCnt;
	}
}
