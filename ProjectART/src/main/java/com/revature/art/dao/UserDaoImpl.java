package com.revature.art.dao;

import java.util.List;

import org.hibernate.Session;

import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;
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


		s.close();

		return u;
	}

	@Override
	public int add(User u) {

		Session s = HibernateUtil.getSession();
		Transaction tx = s.beginTransaction();
		int userId = (Integer) s.save(u);
		tx.commit();
		s.close();
		return userId;


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
		Session s = HibernateUtil.getSession();
		try
		{
			Transaction tx = s.beginTransaction();
			s.saveOrUpdate(u);
			tx.commit();
		}
		finally
		{
			s.close();
		}
	}
	
	@Override
	public List<User>  getUserByEmail(String email) {
		Session s = HibernateUtil.getSession();
		List<User> list = (List<User>) s.createCriteria(User.class).add(Restrictions.eq("email", email)).list();
		s.close();
		return list;
	}
	
	@Override
	public List<User> ifRightPassword(User user) {
		Session s = HibernateUtil.getSession();
		List<User> list = s.createCriteria(User.class) 
		.add(Restrictions.eq("email", user.getEmail()))
		.add(Restrictions.eq("password", user.getPassword())).list();
		s.close();
		return list;
	}

	
	@Override
	public List<User>  getUserByEmail(String email) {
		Session s = HibernateUtil.getSession();
		List<User> list = (List<User>) s.createCriteria(User.class).add(Restrictions.eq("email", email)).list();
		s.close();
		return list;
	}
	
	@Override
	public List<User> ifRightPassword(User user) {
		Session s = HibernateUtil.getSession();
		List<User> list = s.createCriteria(User.class) 
		.add(Restrictions.eq("email", user.getEmail()))
		.add(Restrictions.eq("password", user.getPassword())).list();
		s.close();
		return list;
	}
}
	


