package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.models.Book;

public interface BookRepository extends CrudRepository<Book, Long> {

	// Find ALL BOOKS
	List<Book> findAll();
}
