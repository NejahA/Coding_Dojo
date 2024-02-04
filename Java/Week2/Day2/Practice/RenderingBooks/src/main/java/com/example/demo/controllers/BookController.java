package com.example.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.models.Book;
import com.example.demo.services.BookService;

@Controller
public class BookController {
	 private final BookService bookService;
	 public BookController(BookService bookService){
	     this.bookService = bookService;
	 }
	 
	 @GetMapping("/books/{id}")
	 public String findBook(@PathVariable("id") Long id, Model model) {
	        Book fetchedbook = bookService.findBook(id);
	        model.addAttribute("book", fetchedbook);
	        return "showOne.jsp";
	    }

}
