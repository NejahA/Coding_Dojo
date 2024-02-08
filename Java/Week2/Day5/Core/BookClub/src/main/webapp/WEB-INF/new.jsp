<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />

<meta charset="ISO-8859-1">
<title>Add a book</title>
</head>
<body>
	<div class="contaier">
		<div class="d-flex align-items-baseline mt-2 pb-1">
			<h1 class="col-10">Add a Book to Your Shelf!</h1>
			<a href="/books" class="col-2">back to the shelves</a>
		</div>
		<div class="mt-2 container col-10">
			<form:form action="/books/new/processBook" method="post"
			modelAttribute="book">
				<form:errors class="text-danger" path="*" />
				<p>
					<form:label class="col-2" path="title">Title</form:label>

					<form:input path="title" class="col-5" />
				</p>
				<p>
					<form:label class="col-2" path="author">Author</form:label>

					<form:input path="author" class="col-5" />
				<p class="align-top">
					<form:label class="col-2 align-top" path="review">My thoughts</form:label>

					<form:textarea class="col-5 align-top" path="review"></form:textarea>
				</p>

				<input type="submit" class="col-2 offset-5" value="Submit" />
			</form:form>
		</div>
	</div>
</body>
</html>