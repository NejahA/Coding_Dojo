<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />

<meta charset="UTF-8">
<title>Demo JSP</title>
</head>
<body>
	<div class="container">
	<div class="d-flex align-items-baseline mt-2 pb-1">
	<h1 class="col-10">Change your Entry</h1>
	<a href="/books" class="col-2">back to the shelves</a>
	</div>
	<!-- 		Update a Book Form -->
	<div class="mt-2 container col-10">
	<form:form action="/books/${book.id }" method="post"
		modelAttribute="book">
		<input type="hidden" name="_method" value="put">
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
