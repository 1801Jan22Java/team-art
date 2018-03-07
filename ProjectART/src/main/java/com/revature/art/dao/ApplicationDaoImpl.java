package com.revature.art.dao;

import java.util.List;

import org.hibernate.Session;
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
}
