package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;


@Controller

public class FormController {
    @GetMapping("/omikuji")
    public String displayForm() {
    	return "form.jsp";
    }
    @PostMapping("/processFrom")
    public String postMethodName(@RequestParam(value="number")Integer number,
    							@RequestParam(value="city")String city,
    							@RequestParam(value="hobby")String hobby,
    							@RequestParam(value="person")String person,
    							@RequestParam(value="thing")String thing,
    							@RequestParam(value="message")String message,
    							HttpSession session)
    {
        session.setAttribute("nmuber", number);
        session.setAttribute("city", city);
        session.setAttribute("person", person);
        session.setAttribute("hobby", hobby);
        session.setAttribute("thing", thing);
        session.setAttribute("message", message);
        return "redirect:/omikuji/show";
    }
    @GetMapping("/omikuji/show")
    public String displayMessage() {
    	return "message.jsp";
    }
}
