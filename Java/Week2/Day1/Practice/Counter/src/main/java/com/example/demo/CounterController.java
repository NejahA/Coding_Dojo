package com.example.demo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.HttpSession;
@Controller
public class CounterController {
    @GetMapping("/")
	public String index(HttpSession session){
		if (session.getAttribute("count") == null) {
			session.setAttribute("count", 0);
			}
			else {
				
				Integer count = (Integer)  session.getAttribute("count");
				session.setAttribute("count",count+1 );
			}
			return "index.jsp";		
    }
    @GetMapping("/counter")
    public String counter() {
    	
    	return "counter.jsp";
    }
    
    @GetMapping("/plus2")
   	public String plustwo(HttpSession session){
   		if (session.getAttribute("count") == null) {
   			session.setAttribute("count", 0);
   			}
   			else {
   				
   				Integer count =(Integer) session.getAttribute("count");
   				session.setAttribute("count",count+2 );
   			}
   			return "index1.jsp";		
       }
    @GetMapping("/reset")
   	public String reset(HttpSession session){
   		   	session.setAttribute("count", 0);
   			
   			return "redirect:/counter";		
       }


}
