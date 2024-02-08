package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.models.Book;
import com.example.demo.models.User;
import com.example.demo.services.BookService;
import com.example.demo.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;


@Controller
@RequestMapping("/books")
public class BookController {

	//TODO Route Guard for all routes
	// DI
	@Autowired
	private BookService bookServ;
	
	@Autowired
	private UserService userServ;
	
	// display all books
	@GetMapping("")
	public String home(@ModelAttribute("book") Book book,
			Model model,
			HttpSession session) {
		// ROUTE GUARD
		Long userId = (Long) session.getAttribute("user_id");
		if(userId == null) {
			return "redirect:/";
		}
		// retrieve all books from db
		List<Book> allBooks = bookServ.allBooks();
		model.addAttribute("allBooks",allBooks);
		String username = userServ.findUserById(userId).getUserName();
		model.addAttribute("username",username);
		return "home.jsp";
	}

	// Process Book
	
	
	@GetMapping("/{id}")
	public String displayOne(Model model, @PathVariable("id") Long id,HttpSession session) {
		Long userId = (Long) session.getAttribute("user_id");
		if(userId == null) {
			return "redirect:/";
		}
		Book book = bookServ.findBookById(id);
		model.addAttribute("book",book);
		
		return "oneBook.jsp";
	}
	
	
	@DeleteMapping("/{id}")
	public String deleteBook(@PathVariable("id") Long id) {
		
		bookServ.deleteBook(id);
		
		return "redirect:/books";
	}
	
	@GetMapping("/new")
	public String displayNew(@ModelAttribute("book") Book book) {
		return "new.jsp";
	}
	@PostMapping("/new/processBook")
	public String createBook(@Valid @ModelAttribute("book") Book book,
			BindingResult result,
			Model model,
			HttpSession s) {
		if (result.hasErrors()) {
			// retrieve all books from db
			
			return "new.jsp";
		}else {
			// grab the user id from session
			Long userId = (Long) s.getAttribute("user_id");
			// grab the user by their id
			User user = userServ.findUserById(userId);
			// set the book's author as the current loggedin user(username)
			book.setReviewer(user);
			Book newBook = bookServ.createBook(book);
			return "redirect:/books";
		}
		
	}
	
	// Display Edit Form
	
	@GetMapping("/{id}/edit")
	public String getMethodName(Model model, @PathVariable("id") Long id) {
		// find the book by the id
		Book selectedBook = bookServ.findBookById(id);
		model.addAttribute("book",selectedBook);
		return "edit.jsp";
	}
	
	@PutMapping("/{id}")
	public String editBook(@Valid @ModelAttribute("book") Book book,
			BindingResult result,
			HttpSession s,
			@PathVariable("id") Long bookId) {
		
		if(result.hasErrors()) {
			return "edit.jsp";
		}else {
			// if there are no errors save the updated book to DB
			// grab the user id from session
			Long userId = (Long) s.getAttribute("user_id");
			// grab the user by their id
			User ogAuthor = userServ.findUserById(userId);
			// set the author as the current logged-in user
			book.setReviewer(ogAuthor);
			// Grab the old publisher
			Book oldBook = bookServ.findBookById(bookId);
			// set old publisher to the edited book
			bookServ.updateBook(book);
			return "redirect:/books";
		}
	}
	
	
	

}
