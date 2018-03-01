package com.revature.art.dao;

import java.util.List;

import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import com.revature.art.domain.User;
import com.revature.art.util.HibernateUtil;

@Repository
public class UserDaoImpl implements UserDao{
	@Override
	public List<User> getAll() {
		Session s = HibernateUtil.getSession();
		List<User> u = s.createQuery("from User").list();
		s.close();
		return u;
	}

	@Override
	public User getById(int id) {
		Session s = HibernateUtil.getSession();
		User u = (User) s.get(User.class, id);
		return u;
	}

	@Override
	public int add(User u) {
		return (Integer) HibernateUtil.getSession().save(u);
	}

	@Override
	public void delete(User u) {
		HibernateUtil.getSession().delete(u);
	}

	@Override
	public void merge(User u) {
		HibernateUtil.getSession().merge(u);
	}

	@Override
	public void saveOrUpdate(User u) {
		HibernateUtil.getSession().saveOrUpdate(u);
	}
}
