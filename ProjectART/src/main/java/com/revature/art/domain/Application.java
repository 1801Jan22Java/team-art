package com.revature.art.domain;


import java.sql.Timestamp;
import java.time.LocalDateTime;

import javax.persistence.*;


/*
********  Can't change!!! **********
address - Reston, VA (city, state only!)
phone -  123-123-1234  (format)
appDate - MM/DD/YYYY
housetype - singlehome, apartment, condo, townhome 
 */

@Entity
@Table(name="APPLICATION")
public class Application {

	public Application() {}
	
	public Application(String address, String phone, String profession, Timestamp appDate,
			String housetype, String appStatus, Animal animal, User user) {
		super();
		this.address = address;
		this.phone = phone;
		this.profession = profession;
		this.appDate = appDate;
		this.housetype = housetype;
		this.appStatus = appStatus;
		this.animal = animal;
		this.user = user;
	}
	
	public Application(int applicationID, String address, String phone, String profession, Timestamp appDate,
			String housetype, String appStatus, Animal animal, User user) {
		super();
		this.applicationID = applicationID;
		this.address = address;
		this.phone = phone;
		this.profession = profession;
		this.appDate = appDate;
		this.housetype = housetype;
		this.appStatus = appStatus;
		this.animal = animal;
		this.user = user;
	}

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="applicationSequence")
	@SequenceGenerator(allocationSize=1,name="applicationSequence",sequenceName="SQ_APPLICATION_PK")
	@Column(name = "APPLICATION_ID")
	private int applicationID; //pk
	
	@Column(name = "ADDRESS", nullable = false)
	private String address;
	
	@Column(name = "PHONE", nullable = false)
	private String phone;
	
	@Column(name = "PROFESSION", nullable = false)
	private String profession;
	
	@Column(name = "APP_DATE")
	private Timestamp appDate;
	
	@Column(name = "HOUSE_TYPE")
	private String housetype;
	
	@Column(name = "APP_STATUS")
	private String appStatus;
		
	@OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "ANIMAL_ID")
	private Animal animal; //fk 

	@OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "USER_ID")
	private User user; //fk 

	public int getApplicationID() {
		return applicationID;
	}

	public void setApplicationID(int applicationID) {
		this.applicationID = applicationID;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getProfession() {
		return profession;
	}

	public void setProfession(String profession) {
		this.profession = profession;
	}


	public String getHousetype() {
		return housetype;
	}

	public void setHousetype(String housetype) {
		this.housetype = housetype;
	}

	public String getAppStatus() {
		return appStatus;
	}

	public void setAppStatus(String appStatus) {
		this.appStatus = appStatus;
	}

	public Animal getAnimal() {
		return animal;
	}

	public void setAnimal(Animal animal) {
		this.animal = animal;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Timestamp appDate() {
		return appDate;
	}

	public void setLocalDateTime(Timestamp appDate) {
		this.appDate = appDate;
	}
	public Timestamp getAppDate() {
		return appDate;
	}

	public void setAppDate(Timestamp appDate) {
		this.appDate = appDate;
	}

	@Override
	public String toString() {
		return "Application [applicationID=" + applicationID + ", address=" + address + ", phone=" + phone
				+ ", profession=" + profession + ", appDate=" + appDate + ", housetype=" + housetype
				+ ", appStatus=" + appStatus + ", animal=" + animal + ", user=" + user + "]";
	}

	

	
}
