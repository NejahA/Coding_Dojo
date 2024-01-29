package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;

public class AdminUser extends User implements HIPAACompliantUser, HIPAACompliantAdmin {
	private Integer employeeID;
    private String role;
    private ArrayList<String> securityIncidents;
	private int pin;

    // TO DO: Implement a constructor that takes an ID and a role
    public AdminUser(Integer employeeID, String role) {
 		super();
 		this.employeeID = employeeID;
 		this.role = role;
 	}
    
    public boolean assignPin(int pin) {
		if ( pin>=100000) {
			setPin(pin);
			return true;
		}
		else {
			return false;
		}
	}
	public boolean accessAuthorized(Integer confirmedAuthID) {
		if (confirmedAuthID==getEmployeeID()) {
			return true;
		}
		else {return false;}
	}
	public ArrayList<String> reportSecurityIncidents(){
		ArrayList<String> incidents =securityIncidents;
		return incidents;
	}

    // TO DO: Implement HIPAACompliantUser!
    // TO DO: Implement HIPAACompliantAdmin!
    
    public void newIncident(String notes) {
        String report = String.format(
            "Datetime Submitted: %s \n,  Reported By ID: %s\n Notes: %s \n", 
            new Date(), this.id, notes
        );
        securityIncidents.add(report);
    }
 
	public void authIncident() {
        String report = String.format(
            "Datetime Submitted: %s \n,  ID: %s\n Notes: %s \n", 
            new Date(), this.id, "AUTHORIZATION ATTEMPT FAILED FOR THIS USER"
        );
        securityIncidents.add(report);
    }

	public Integer getEmployeeID() {
		return employeeID;
	}

	public void setEmployeeID(Integer employeeID) {
		this.employeeID = employeeID;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

//	public ArrayList<String> getSecurityIncidents() {
//		return securityIncidents;
//	}
//
//	public void setSecurityIncidents(ArrayList<String> securityIncidents) {
//		this.securityIncidents = securityIncidents;
//	}

	public int getPin() {
		return pin;
	}

	public void setPin(int pin) {
		this.pin = pin;
	}
    
    // TO DO: Setters & Getters
}
