package com.example;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/daikichi")

public class Controller {
    @GetMapping("/{var1}/{var2}")
    public String daikichi(@PathVariable("var1") String var1, @PathVariable("var2") String var2){
    	String message="";
    	if (var1.equals("travel")) {
    		 message="Congratulations! You will soon travel to "+var2 + "!";
    	}
    	if (var1.equals("lotto")) {
    		if (Integer.parseInt(var2)%2==0) {
    			message="You will take a grand journey in the near future, but be weary of tempting offers";
    		}
    		if (Integer.parseInt(var2)%2!=0) {
    			message="You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends";
    		}
    	}
    	return message;
    				}
    }