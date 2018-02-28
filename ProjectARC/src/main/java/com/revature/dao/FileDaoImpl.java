package com.revature.dao;

import java.util.List;

import org.hibernate.Session;

import com.revature.domains.File;
import com.revature.util.HibernateUtil;

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
		return (int) HibernateUtil.getSession().save(file);
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
