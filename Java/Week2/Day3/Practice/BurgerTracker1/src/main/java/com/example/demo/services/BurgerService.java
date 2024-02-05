package com.example.demo.services;

import java.util.List;

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
	
	public void createBurger(Burger b) {
		burgerRepository.save(b);
		
	}
}
