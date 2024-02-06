package com.example.demo.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.example.demo.models.Burger;
import com.example.demo.services.BurgerService;

import jakarta.validation.Valid;

@Controller
public class BurgerController {
	
	private final BurgerService burgerService;
	public BurgerController(BurgerService burgerService) {
		this.burgerService=burgerService;
	}
	
	
	@GetMapping("/")
	public String index(@ModelAttribute("burger") Burger burger, Model model) {
		List<Burger> burgers= burgerService.allBurgers();
		model.addAttribute("burgers",burgers);
		return "index.jsp";
	}

	@PostMapping("/processBurger")
	public String create(@Valid @ModelAttribute("burger") Burger burger, 
							BindingResult result,Model model) {
		if(result.hasErrors()) {
			List<Burger> burgers= burgerService.allBurgers();
			model.addAttribute("burgers",burgers);
			return "index.jsp";
		}else {
			burgerService.createBurger(burger);
			return "redirect:/";
		}
	}
	@GetMapping("/burgers/edit/{id}")
	public String displayEdit(@ModelAttribute("burger") Burger burger, Model model,
								@PathVariable ("id") Long id) {
		burger = burgerService.findBurgerById(id);
		model.addAttribute("burger", burger);
		return "edit.jsp";
	}
//	
	@PostMapping("/burgers/edit/{id}")
	public String edit(@Valid @ModelAttribute("burger") Burger burger, 
			BindingResult result,Model model,@PathVariable ("id") Long id) {
		if(result.hasErrors()) {
//			burger = burgerService.findBurgerById(id);
//			model.addAttribute("burger", burger);
			return "edit.jsp";
		}else {
			burgerService.editBurger(burger);

			return "redirect:/";
		}
	}
}
