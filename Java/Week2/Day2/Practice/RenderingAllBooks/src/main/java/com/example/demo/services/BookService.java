package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.models.Book;
import com.example.demo.repositories.BookRepository;

@Service
public class BookService {
    // adding the book repository as a dependency
    private final BookRepository bookRepository;
    
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }
    // returns all the books
    public List<Book> allBooks() {
        return bookRepository.findAll();
    }
    // creates a book
    public Book updateBook(Long id, String title, String desc, String lang, Integer numOfPages) {
        Book updated = new Book();
        updated.setId(id);
        updated.setDescription(desc);
        updated.setLanguage(lang);
        updated.setTitle(title);
        updated.setNumberOfPages(numOfPages);
    	return bookRepository.save(updated);
    }
    public Book createBook(String title,String desc,String lang,Integer numOfPages) {
    	Book created = new Book();
    	created.setDescription(desc);
    	created.setLanguage(lang);
    	created.setTitle(title);
    	created.setNumberOfPages(numOfPages);
        return bookRepository.save(created);
    }
    
    public void deleteBook(Long id) {
         bookRepository.deleteById(id);
    }

    // retrieves a book
    public Book findBook(Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()) {
            return optionalBook.get();
        } else {
            return null;
        }
    }
}
