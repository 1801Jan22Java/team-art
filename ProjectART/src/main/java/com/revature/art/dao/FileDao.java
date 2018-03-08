package com.revature.art.dao;

import java.util.List;

import com.revature.art.domain.Animal;
import com.revature.art.domain.File;

public interface FileDao {
	public List<File> getAll();
	public File getById(int id);
	public int add(File file);
	public void delete(File file);
	public void merge(File file);
	public void saveOrUpdate(File file);
	
	// Gin
	public int addFile(File file);
	public List<File> getFileByAnimalId(Animal a);
}
