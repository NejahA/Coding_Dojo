package com.example;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@RestController

public class HumanController {
	@GetMapping("/")
    public String index(@RequestParam(value="name", required=false) String name,
    					@RequestParam(value="last_name", required=false) String lname,
    					@RequestParam(value="times", required=false) String times) {
		String message="";
        if (name==null) {message= "Hello Human";}
		if (name!=null && lname==null && times==null) {message= "Hello "+name;};
		if (name!=null && lname!=null) {message= "Hello "+name+" "+lname;}
		if (name!=null && times!=null)
		{	
			 
			for(Integer i=0; i<Integer.parseInt(times);i++) {			
				message+= "Hello "+name+" ";}
		}
		return message;
    }

}
