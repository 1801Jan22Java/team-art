package com.revature.art.domain;

import java.io.Serializable;
import java.sql.Timestamp;
import java.time.LocalDateTime;

import javax.persistence.*;

/*
********  Can't change!!! **********
meetupDate -  MM/DD/YYYY
meetupStatus -  Pending / Approved / Denied
*/
@Entity
@Table(name="MEETUP")
public class Meetup implements Serializable{

	public Meetup() {}
	
	public Meetup(Timestamp meetupDate, Animal animal, User user, String meetupStatus) {
		super();
		this.meetupDate = meetupDate;
		this.animal = animal;
		this.user = user;
		this.meetupStatus = meetupStatus;
	}
	
	public Meetup(int meetupID, Timestamp meetupDate, Animal animal, User user, String meetupStatus) {
		super();
		this.meetupID = meetupID;
		this.meetupDate = meetupDate;
		this.animal = animal;
		this.user = user;
		this.meetupStatus = meetupStatus;
	}

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="meetupSequence")
	@SequenceGenerator(allocationSize=1,name="meetupSequence",sequenceName="SQ_MEETUP_PK")
	@Column(name = "MEETUP_ID")
	private int meetupID; //pk
	
	@Column(name = "MEETUP_DATE")
	private Timestamp meetupDate;
	
	@OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "ANIMAL_ID")
	private Animal animal; //fk 

	@OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "USER_ID")
	private User user; //fk 
	
	@Column(name = "MEETUP_STATUS")
	private String meetupStatus;

	@Override
	public String toString() {
		return "Meetup [meetupID=" + meetupID + ", meetupDate=" + meetupDate + ", animal=" + animal + ", user=" + user
				+ ", meetupStatus=" + meetupStatus + "]";
	}
	
	
}
