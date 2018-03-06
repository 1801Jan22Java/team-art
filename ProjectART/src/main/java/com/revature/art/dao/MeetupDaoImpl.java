package com.revature.art.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.stereotype.Repository;

import com.revature.art.domain.Meetup;
import com.revature.art.util.HibernateUtil;

@Repository
public class MeetupDaoImpl implements MeetupDao{
	@Override
	public List<Meetup> getAll() {
		Session s = HibernateUtil.getSession();
		List<Meetup> m = s.createQuery("from Meetup").list();
		s.close();
		return m;
	}

	@Override
	public Meetup getById(int id) {
		Session s = HibernateUtil.getSession();
		Meetup m = (Meetup) s.get(Meetup.class, id);
		return m;
	}

	@Override
	public int add(Meetup m) {
		Session s = HibernateUtil.getSession();
		Transaction tx = s.beginTransaction();
		int id = (Integer) HibernateUtil.getSession().save(m);
		tx.commit();
		s.close();
		return id;
	}

	@Override
	public void delete(Meetup m) {
		Session s = HibernateUtil.getSession();
		try
		{
			Transaction tx = s.beginTransaction();
			HibernateUtil.getSession().delete(m);
			tx.commit();
		}
		finally 
		{
			s.close();
		}
	}

	@Override
	public void merge(Meetup m) {
		Session s = HibernateUtil.getSession();
		try
		{
			Transaction tx = s.beginTransaction();
			HibernateUtil.getSession().merge(m);
			tx.commit();
		}
		finally 
		{
			s.close();
		}
	}

	@Override
	public void saveOrUpdate(Meetup m) {
		Session s = HibernateUtil.getSession();
		try
		{
			Transaction tx = s.beginTransaction();
			s.saveOrUpdate(m);
			tx.commit();
		}
		finally 
		{
			s.close();
		}
	}
}
