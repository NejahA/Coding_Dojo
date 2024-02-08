<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Demo JSP</title>
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css" />
<!-- For any Bootstrap that uses JS -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>

</head>
<body>
	<div class="container">
		<h1 style="color:#9900FF">Book Store</h1>
		<div class="d-flex align-items-baseline">
		<h1 class="col-10">Welcome, ${username}</h1>
		<a class="col-2 text-end" href="/logout">Logout</a>
		
		</div>
		<div class="d-flex align-items-baseline ">
		<p class="col-10">Books from everyone's shelves:</p>
		<a href="/books/new" class="col-2 text-end">+ Add to my shelf!</a>
		</div>
		<!-- 		Display all Books -->
<%-- 		${allBooks  } --%>
		<table class="table">
			<thead>
				<tr>
					<th>ID</th>
					<th>Title</th>
					<th>Author</th>
					<th>Posted By</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach items="${allBooks }" var="oneBook">
					<tr>
						<td>${oneBook.id}</td>
						<td><a href="/books/${oneBook.id}">${oneBook.title}</a></td>
						<td>${oneBook.author}</td>
						<td>
						${oneBook.reviewer.userName }
						</td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
		<hr>
		<!-- 		Create a Book Form -->
		
	</div>
</body>
</html>
