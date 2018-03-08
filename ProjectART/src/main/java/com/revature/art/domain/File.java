package com.revature.art.domain;

import java.io.Serializable;

import javax.persistence.*;

/*
********  Can't change!!! **********
filename - aaa.jpg
the path of the folder to save animal image!  >> webapp/resources/image 
*/
@Entity
@Table(name="FILES")
public class File implements Serializable{

	public File() {}
	
	public File(String filename, Animal animal) {
		super();
		this.filename = filename;
		this.animal = animal;
	}
	
	public File(int filelID, String filename, Animal animal) {
		super();
		this.fileID = filelID;
		this.filename = filename;
		this.animal = animal;
	}

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="filesSequence")
	@SequenceGenerator(allocationSize=1,name="filesSequence",sequenceName="SQ_FILES_PK")
	@Column(name = "FILE_ID")
	private int fileID; //pk
	
	@Column(name = "FILENAME")
	private String filename;
	
	@ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "ANIMAL_ID")
	private Animal animal; //fk 

	public int getFilelID() {
		return fileID;
	}

	public void setFilelID(int filelID) {
		this.fileID = filelID;
	}

	public String getFilename() {
		return filename;
	}

	public void setFilename(String filename) {
		this.filename = filename;
	}

	public Animal getAnimal() {
		return animal;
	}

	public void setAnimal(Animal animal) {
		this.animal = animal;
	}

	@Override
	public String toString() {
		return "Files [filelID=" + fileID + ", filename=" + filename + ", animal=" + animal + "]";
	}
	
	
}
