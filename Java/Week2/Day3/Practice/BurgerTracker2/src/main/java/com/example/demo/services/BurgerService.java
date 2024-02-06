package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.models.Burger;
import com.example.demo.repositories.BurgerRepository;

@Service
public class BurgerService {
	
	private final BurgerRepository burgerRepository;
	public BurgerService(BurgerRepository burgerRepository) {
		this.burgerRepository=burgerRepository;
	}
	
	public List<Burger> allBurgers(){
		return burgerRepository.findAll();
	}
	
	public Burger findBurgerById(Long id) {
		Optional<Burger> potentialburger = burgerRepository.findById(id);
		if (potentialburger.isPresent()) {
			Burger burger = potentialburger.get();
			return burger;
		}
		else {			
			return null;
		} 

	}
	public void createBurger(Burger b) {
		burgerRepository.save(b);
		
	}
	public void editBurger(Burger b) {
		burgerRepository.save(b);
		
	}

}
