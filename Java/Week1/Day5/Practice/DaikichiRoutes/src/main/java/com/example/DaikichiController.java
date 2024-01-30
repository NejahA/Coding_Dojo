package com.example;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/daikichi")

public class DaikichiController {
		@GetMapping("/")
	    public String welcome(){
	      return "Welcome!";
	    }
	    @GetMapping("/today")
	    public String today(){
	      return "I hope you find good luck in your endevors!";
	    }
	    @GetMapping("/tomorrow")
	    public String tomorrow(){
	      return "Tomorrow, hopefully an opportunity will arise,be sure to be open to new ideas!";
	    }

}
