package com.revature.art.service;

import java.sql.SQLException;
import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.art.dao.AnimalDao;
import com.revature.art.dao.ApplicationDao;
import com.revature.art.dao.FileDao;
import com.revature.art.dao.MeetupDao;
import com.revature.art.dao.UserDao;
import com.revature.art.domain.Animal;
import com.revature.art.domain.Meetup;
import com.revature.art.domain.User;

//Don't move source code written by someone else. just call in your controller
@Service
public class MeetupServiceImpl implements MeetupService {

	private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

	@Autowired
	private AnimalDao animalDao;
	@Autowired
	private ApplicationDao applicationDao;
	@Autowired
	private FileDao fileDao;
	@Autowired
	private MeetupDao meetupDao;
	@Autowired
	private UserDao userDao;
	// Eric

	// Evan

	// James

	// Gin
	@Override
	public String addVisitorForm(HashMap<String, Object> visitorForm) {
		// {meetuptime=13:00, meetupday=2018-01-03, animalID=2, userID=2}
		Meetup m = new Meetup();

		Animal a = animalDao.getById(Integer.parseInt((String) visitorForm.get("animalID")));
		m.setAnimal(a);
		User u = userDao.getById((Integer) visitorForm.get("userID"));
		m.setUser(u);

		String day = (String) visitorForm.get("meetupday");
		String time = (String) visitorForm.get("meetuptime");
		SimpleDateFormat sm = new SimpleDateFormat("yyyy-MM-dd mm:ss");		// case sensitive!!
		try {
			Date parsedDate = sm.parse(day + " " + time);
			Timestamp visitTime = new Timestamp(parsedDate.getTime());
			System.out.println("what DATE???" + day + " " + time + " / " + visitTime);
			
			m.setMeetupDate(visitTime);
			m.setMeetupStatus("Pending");
			meetupDao.add(m);
			return "Succeess!";

		} catch (ParseException e) {
			return "Date type is  wrong. Fail!";

		} catch (Exception e) {
			return "Fail!";
		}
	}

	@Override
	public List<HashMap<String,Object>> getVisitorsNumberByYearMonth(String sDate) {
		//get year/month, then get number of visitors on day
		 
		List<HashMap<String,Object>> list = meetupDao.getNumberOfVisitors(sDate);
		
		return list;
	}

	@Override
	public  List<Meetup>  getVisitorsByDay(String sDate) {
		List<Meetup> list = meetupDao.getVisitorsByDay(sDate);
		return list;
	}

}
