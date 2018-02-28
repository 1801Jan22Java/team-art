package com.revature.main;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.LocalTime;

import javax.persistence.TemporalType;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.revature.domains.Animal;
import com.revature.domains.Application;
import com.revature.domains.File;
import com.revature.domains.Meetup;
import com.revature.domains.User;
import com.revature.util.HibernateUtil;

public class Driver {
	
	 private static final SimpleDateFormat sdf = new SimpleDateFormat("yyyy.MM.dd.HH.mm.ss");
	
	public static void main(String[] args) {
		
		Timestamp ts = new Timestamp(System.currentTimeMillis());
		System.out.println(ts);
		
		Session s = HibernateUtil.getSession();
		Transaction tx = s.beginTransaction();
	
		Animal animal = new Animal("Tommy", "Young", "Male", "Available", "Dog");
		User user = new User(0, "TheBest@gmail.com", "GreatPassword", "Lily");
		
		s.save(animal);
		s.save(user);
		
		tx.commit();
		s.close();
		
		Session s2 = HibernateUtil.getSession();
		Transaction tx2 = s2.beginTransaction();
		
		File files = new File("Picture.jpeg", animal);
		Meetup meetup = new Meetup(ts, animal, user, "Approved");
		Application application = new Application("5522 Bob Dole Lane San Diego, CA 92100", "555-555-5555", "Doctor", ts, "Apartment", "Pending", animal, user);
		
		s2.save(files);
		s2.save(meetup);
		s2.save(application);
		
		tx2.commit();
		s2.close();
		
	}
}
