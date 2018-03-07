package com.revature.art.dao;

import java.util.List;

import javax.servlet.annotation.MultipartConfig;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.stereotype.Repository;

import com.revature.art.domain.File;
import com.revature.art.util.HibernateUtil;

@Repository
public class FileDaoImpl implements FileDao{

	@Override
	public List<File> getAll() {
		Session s = HibernateUtil.getSession();
		List<File> animalFiles = s.createQuery("from animalFile").list();
		s.close();
		return animalFiles;
	}

	@Override
	public File getById(int id) {
		Session s = HibernateUtil.getSession();
		File animalFile = (File) s.get(File.class, id);
		return animalFile;
	}

	@Override
	public int add(File file) {
		Session s = HibernateUtil.getSession();
		Transaction tx = s.beginTransaction();
		s.save(file);
		tx.commit();
		s.close();
		return (Integer) HibernateUtil.getSession().save(file);
	}

	@Override
	public void delete(File file) {
		HibernateUtil.getSession().delete(file);
	}

	@Override
	public void merge(File file) {
		HibernateUtil.getSession().merge(file);
	}

	@Override
	public void saveOrUpdate(File file) {
		HibernateUtil.getSession().saveOrUpdate(file);
	}

}
