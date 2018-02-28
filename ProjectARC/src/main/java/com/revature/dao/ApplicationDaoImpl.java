package com.revature.dao;

import java.util.List;

import org.hibernate.Session;

import com.revature.domains.Application;
import com.revature.util.HibernateUtil;

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
		return (int) HibernateUtil.getSession().save(a);
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
