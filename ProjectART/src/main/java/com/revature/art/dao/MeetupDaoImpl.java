package com.revature.art.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
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
	public List<Meetup> getByUserId(int userId) {
		Session s = HibernateUtil.getSession();
		Query q = s.createQuery("from Meetup meet where meet.user.userID = :userId");
		q.setParameter("userId", userId);
		List<Meetup> a = q.list();
		return a;
	}

	@Override
	public Meetup getById(int id) {
		Session s = HibernateUtil.getSession();
		Meetup m = (Meetup) s.get(Meetup.class, id);
		return m;
	}

	@Override
	public int add(Meetup m) {
		return (Integer) HibernateUtil.getSession().save(m);
	}

	@Override
	public void delete(Meetup m) {
		HibernateUtil.getSession().delete(m);
	}

	@Override
	public void merge(Meetup m) {
		HibernateUtil.getSession().merge(m);
	}

	@Override
	public void saveOrUpdate(Meetup m) {
		HibernateUtil.getSession().saveOrUpdate(m);
	}
}
