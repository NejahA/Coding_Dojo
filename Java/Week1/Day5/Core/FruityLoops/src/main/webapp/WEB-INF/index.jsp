<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
	crossorigin="anonymous">
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<meta charset="ISO-8859-1">
<title>Fruity Loops</title>
</head>
<body>
	<div class="container">
		<h1 class="mt-5 mb-5" style="color: #FFB6C2">Fruity Store</h1>
	<div class="container p-4" style="background-color:#FFB6C2">
		<table class="table">
		<thead>
		<tr>
			<th>Name</th>
			<th>Price</th>
		<tr>
		
		</thead>
		<tbody>
		<c:forEach items="${fruits }" var="fruit">
		<tr>
			<th>${fruit.name }</th>
			<th>${fruit.price }</th>
		<tr>
		</c:forEach>
		</tbody>
		</table>
	</div>

	</div>
</body>
</html>