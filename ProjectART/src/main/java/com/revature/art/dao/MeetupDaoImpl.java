package com.revature.art.dao;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.logging.SimpleFormatter;

import org.apache.commons.lang.time.DateUtils;
import org.hibernate.Criteria;
import org.hibernate.SQLQuery;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Repository;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.art.domain.Meetup;
import com.revature.art.util.HibernateUtil;

@Repository
public class MeetupDaoImpl implements MeetupDao{
	@Override
	public List<Meetup> getAll() {
		Session s = HibernateUtil.getSession();
		List<Meetup> m = s.createQuery("from Meetup").list();
		s.close();
		return m;
	}
	

	@Override
	public List<Meetup> getByUserId(int userId) {
		Session s = HibernateUtil.getSession();
		Query q = s.createQuery("from Meetup meet where meet.user.userID = :userId");
		q.setParameter("userId", userId);
		List<Meetup> a = q.list();
		return a;
	}

	@Override
	public Meetup getById(int id) {
		Session s = HibernateUtil.getSession();
		Meetup m = (Meetup) s.get(Meetup.class, id);
		return m;
	}

	@Override
	public int add(Meetup m) {
		Session s = HibernateUtil.getSession();
		Transaction tx = s.beginTransaction();
		System.out.println(m.toString());
		int meetupID = (Integer)s.save(m);
		tx.commit();
		s.close();
		return meetupID;
	}

	@Override
	public void delete(Meetup m) {
		HibernateUtil.getSession().delete(m);
	}

	@Override
	public void merge(Meetup m) {
		HibernateUtil.getSession().merge(m);
	}

	@Override
	public void saveOrUpdate(Meetup m) {
		Session s = HibernateUtil.getSession();
		Transaction tx = s.beginTransaction();
		s.saveOrUpdate(m);
		tx.commit();
		s.close();
	}
	
	// Gin
	@Override
	public List<HashMap<String,Object>>  getNumberOfVisitors(String sDate) {
		// YYYY-MM will come. (chosen month)
		List<HashMap<String,Object>> list = new ArrayList<HashMap<String, Object>>();

		Session s = HibernateUtil.getSession();
		try {
			String hql = "SELECT count(*) as cnt, TO_CHAR(M.meetupDate, 'dd') as day FROM Meetup M "
					+ " WHERE TO_CHAR(M.meetupDate, 'yyyy-mm' ) = :theMonth" 
					+ " GROUP BY (TO_CHAR(M.meetupDate, 'dd'))"
					+ " ORDER BY (TO_CHAR(M.meetupDate, 'dd'))";
			Query q = s.createQuery(hql).setParameter("theMonth", sDate);
			List<Object> result  = (List<Object>)q.list();
			Iterator itr = result.iterator();

			while(itr.hasNext()) {
				HashMap<String, Object> map = new HashMap<String, Object>();
				Object[] obj = (Object[]) itr.next();
				map.put("totalVisitor", obj[0]);
				map.put("day", obj[1]);
				list.add(map);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		s.close();
		return list;
	}
	
	@Override
	public List<Meetup> getVisitorsByDay(String sDate) {
		//YYYY-MM-DD will come. (chosen day)
		Session s = HibernateUtil.getSession();
		List<Meetup> list = new ArrayList<Meetup>(); 
		try {
		    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		    Date parsedDate1 = dateFormat.parse(sDate);
		    Timestamp theDay = new java.sql.Timestamp(parsedDate1.getTime());
		    
		    Calendar c = Calendar.getInstance();
		    c.setTime(dateFormat.parse(sDate));
		    c.add(Calendar.DATE, 1);  // number of days to add
		    String eDate = dateFormat.format(c.getTime()); 
		    Date parsedDate2 = dateFormat.parse(eDate);
		    Timestamp nextDay = new java.sql.Timestamp(parsedDate2.getTime());
		    
		    Criteria cr = s.createCriteria(Meetup.class);
		    list = cr.add(Restrictions.ge("meetupDate",theDay))
		    	.add(Restrictions.lt("meetupDate",nextDay)).list();
		} catch(Exception e) { 
			
		}
		s.close();
		return list;
	}
}
