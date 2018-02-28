package com.revature.dao;

import java.util.List;

import com.revature.domains.File;

public interface FileDao {
	public List<File> getAll();
	public File getById(int id);
	public int add(File file);
	public void delete(File file);
	public void merge(File file);
	public void saveOrUpdate(File file);
}
