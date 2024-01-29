package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;

public class Physician extends User implements HIPAACompliantUser {
	private ArrayList<String> patientNotes;
	private Integer id;
	private int pin;
	// TO DO: Constructor that takes an IDcopy
	public Physician (Integer IDcopy) {
		this.id = IDcopy;
	}
	
	
    // TO DO: Implement HIPAACompliantUser!
	
	public void newPatientNotes(String notes, String patientName, Date date) {
        String report = String.format(
            "Datetime Submitted: %s \n", date);
        report += String.format("Reported By ID: %s\n", this.id);
        report += String.format("Patient Name: %s\n", patientName);
        report += String.format("Notes: %s \n", notes);
        this.patientNotes.add(report);
    }

	public boolean assignPin(int pin) {
		if (pin>=1000 && pin<=9999) {
			setPin(pin);
			return true;
		}
		else {
			return false;
		}
	}
	public boolean accessAuthorized(Integer confirmedAuthID) {
		if (confirmedAuthID==getId()) {
			return true;
		}
		else {return false;}
	}
	
	

	public ArrayList<String> getPatientNotes() {
		return patientNotes;
	}
	public void setPatientNotes(ArrayList<String> patientNotes) {
		this.patientNotes = patientNotes;
	}


	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
    // TO DO: Setters & Getters


	public int getPin() {
		return pin;
	}


	public void setPin(int pin) {
		this.pin = pin;
	}
}
