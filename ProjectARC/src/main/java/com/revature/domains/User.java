package com.revature.domains;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name="USERS")
public class User implements Serializable{
	
	public User() {}

	public User(int usertype, String email, String password, String name) {
		super();
		this.usertype = usertype;
		this.email = email;
		this.password = password;
		this.name = name;
	}
	
	public User(int userID, int usertype, String email, String password, String name) {
		super();
		this.userID = userID;
		this.usertype = usertype;
		this.email = email;
		this.password = password;
		this.name = name;
	}

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="usersSequence")
	@SequenceGenerator(allocationSize=1,name="usersSequence",sequenceName="SQ_USERS_PK")
	@Column(name="USER_ID")
	private int userID; //pk
	
	@Column(name="USERTYPE", nullable = false)
	private int usertype;
	
	@Column(name="EMAIL")
	private String email;
	
	@Column(name="PASSWORD", nullable = false)
	private String password;
	
	@Column(name="NAME")
	private String name;

	public int getUserID() {
		return userID;
	}

	public void setUserID(int userID) {
		this.userID = userID;
	}

	public int getUsertype() {
		return usertype;
	}

	public void setUsertype(int usertype) {
		this.usertype = usertype;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Users [userID=" + userID + ", usertype=" + usertype + ", email=" + email + ", password=" + password
				+ ", name=" + name + "]";
	}
	
	}
