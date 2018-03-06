package com.revature.art.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.stereotype.Repository;

import com.revature.art.domain.Application;
import com.revature.art.util.HibernateUtil;

@Repository
public class ApplicationDaoImpl implements ApplicationDao{

	@Override
	public List<Application> getAll() {
		Session s = HibernateUtil.getSession();
		List<Application> a = s.createQuery("from Application").list();
		s.close();
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
		Session s = HibernateUtil.getSession();
		Transaction tx = s.beginTransaction();
		int id = (Integer) HibernateUtil.getSession().save(a);
		tx.commit();
		s.close();
		return id;
	}

	@Override
	public void delete(Application a) {
		Session s = HibernateUtil.getSession();
		try
		{
			Transaction tx = s.beginTransaction();
			HibernateUtil.getSession().delete(a);
			tx.commit();
		}
		finally 
		{
			s.close();
		}
	}

	@Override
	public void merge(Application a) {
		Session s = HibernateUtil.getSession();
		try
		{
			Transaction tx = s.beginTransaction();
			HibernateUtil.getSession().merge(a);
			tx.commit();
		}
		finally 
		{
			s.close();
		}
	}

	@Override
	public void saveOrUpdate(Application a) {
		Session s = HibernateUtil.getSession();
		try
		{
			Transaction tx = s.beginTransaction();
			s.saveOrUpdate(a);
			tx.commit();
		}
		finally 
		{
			s.close();
		}
	}
}
