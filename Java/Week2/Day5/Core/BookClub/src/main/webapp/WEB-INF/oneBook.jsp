<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />

<title>One Book</title>
</head>
<body>
	<div class="container ">
		<div class="pt-3 pb-3 d-flex align-items-center">
			<h1 class="col-10 align-middle ">${book.title }</h1>
			<a class="col-2 text-end align-middle" href="/books">back to the shelves</a>
		</div>
		<c:if test="${!(book.reviewer.id == user_id)}">
			<div>${book.reviewer.userName } read ${book.title } by
				${book.author }, here are ${book.reviewer.userName }'s thoughts:</div>
		</c:if>
		<c:if test="${(book.reviewer.id == user_id)}">
			<div>You read ${book.title } by ${book.author }, and here are
				your thoughts :</div>
		</c:if>
		<hr />
		<div>${book.review }</div>
		<hr />
		<div  class="d-flex space-between col-3 offset-9">
		<c:if test="${book.reviewer.id == user_id }">
			<a href="/books/${book.id }/edit" class="col-3"><button>Edit</button></a>
			<form class="col-3" action="/books/${book.id}" method="post">
				<input type="hidden" name="_method" value="delete"> <input
					type="submit" value="Delete">
			</form>
		</c:if>
		</div>
	</div>
</body>
</html>