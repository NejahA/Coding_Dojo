<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
	crossorigin="anonymous">
<meta charset="ISO-8859-1">
<title>Burger Tracker</title>
</head>
<body>
	<div class="container ">
		<div class=" d-flex space-between">
			<h1 class="col-10">Edit Burger</h1>
			<p>
				<a href="/">Go back</a>
			</p>
		</div>
		<form:form>
			<form:form modelAttribute="burger" method="post"
				action="">
				<p>
					<form:input path="id" type="hidden" value="${burger.id }"/>
					<form:label class="col-2" path="name">Burger Name</form:label>
					<form:input class=" col-2" path="name" value="${burger.name }" />
				</p>
				<small style="color: red"> <form:errors path="name" />
				</small>
				<p>
					<form:label class="col-2" path="restaurant">Restaurant Name</form:label>
					<form:input class=" col-2" path="restaurant"
						value="${burger.restaurant }" />
				</p>
				<small style="color: red"> <form:errors path="restaurant" />
				</small>
				<p>
					<form:label class="col-2" path="rating">Rating</form:label>
					<form:input class=" col-2" path="rating" type="number"
						value="${burger.rating }" />
				</p>
				<small style="color: red"> <form:errors path="rating" />
				</small>
				<p>
					<form:label class="col-2" path="notes">Notes</form:label>
					<form:textarea class=" col-2" path="notes" value="${burger.notes }"></form:textarea>
				</p>
				<small style="color: red"> <form:errors path="notes" />
				</small>
				<button>Submit</button>
			</form:form>

		</form:form>
	</div>
</body>
</html>


