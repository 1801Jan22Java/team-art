package com.revature.art.domain;

import java.io.Serializable;

import javax.persistence.*;

/* 
can't change !!! 
 maturity -  Infant / Young / Adult / Mature /
 gender -	 Male  /   Female  
 adoptStatus -   Pending  /  Adopted /  Available   
 species -  Dog / Cat / Fish / Rabbit / Octopus /  Lizard  / Turtle  / Horse / Other
*/

@Entity
@Table(name="ANIMALS")
public class Animal implements Serializable{
	

	public Animal() {}
	
	public Animal(String name, String maturity, String gender, String adoptStatus, String species) {
		super();
		this.name = name;									
		this.maturity = maturity;								
		this.gender = gender;
		this.adoptStatus = adoptStatus;
		this.species = species;
	}

	public Animal(int animalID, String name, String maturity, String gender, String adoptStatus, String species) {
		super();
		this.animalID = animalID;
		this.name = name;
		this.maturity = maturity;
		this.gender = gender;
		this.adoptStatus = adoptStatus;
		this.species = species;
	}


	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="animalsSequence")
	@SequenceGenerator(allocationSize=1,name="animalsSequence",sequenceName="SQ_ANIMALS_PK")
	@Column(name = "ANIMAL_ID")
	private int animalID; //pk
	
	@Column(name = "NAME")
	private String name;
	
    @Column(name = "MATURITY")
	private String maturity; 
	
    @Column(name = "GENDER")
	private String gender;
	
    @Column(name = "ADOPT_STATUS")
	private String adoptStatus; 
    
    @Column(name = "SPECIES")
    private String species;

	public int getAnimalID() {
		return animalID;
	}

	public void setAnimalID(int animalID) {
		this.animalID = animalID;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMaturity() {
		return maturity;
	}

	public void setMaturity(String maturity) {
		this.maturity = maturity;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAdoptStatus() {
		return adoptStatus;
	}

	public void setAdoptStatus(String adoptStatus) {
		this.adoptStatus = adoptStatus;
	}

	public String getSpecies() {
		return species;
	}

	public void setSpecies(String species) {
		this.species = species;
	}

	@Override
	public String toString() {
		return "Animals [animalID=" + animalID + ", name=" + name + ", maturity=" + maturity + ", gender=" + gender
				+ ", adoptStatus=" + adoptStatus + ", species=" + species + "]";
	}
	
	

	
	
}
