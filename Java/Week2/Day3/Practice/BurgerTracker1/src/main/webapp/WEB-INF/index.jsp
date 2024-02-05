<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Burger Tracker</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
	crossorigin="anonymous">
</head>
<body>
<div class="container">
	<h1>Burger Tracker</h1>
	<table class="table table-striped">
			<thead>
				<tr>
					<th>Burger Name</th>
					<th>Restaurant Name</th>
					<th>Rating</th>
				</tr>
			</thead>
					
		<c:forEach items="${burgers }" var="oneBurger" >
				<tr>
					<td>${oneBurger.name }</td>
					<td>${oneBurger.restaurant }</td>
					<td>${oneBurger.rating }</td>
				</tr>
		</c:forEach>
					 

		</table>
	<h1>Add a Burger</h1>
	<form:form modelAttribute="burger" method="post" action="/processBurger">
	  <p>
        <form:label class="col-2" path="name">Burger Name</form:label>
        <form:input class=" col-2" path="name"/>
    </p>
        <small style="color:red">
        <form:errors  path="name"/>
        </small>
    <p>
        <form:label class="col-2" path="restaurant">Restaurant Name</form:label>
        <form:input class=" col-2" path="restaurant"/>
    </p>
            <small style="color:red">
        <form:errors path="restaurant"/>
    </small>
    <p>
        <form:label class="col-2" path="rating">Rating</form:label>
        <form:input class=" col-2" path="rating" type="number"/>
    </p>
            <small style="color:red">
        <form:errors path="rating"/>
    </small>
    <p>
        <form:label  class="col-2" path="notes">Notes</form:label>
        <form:textarea class=" col-2" path="notes"></form:textarea>
    </p>
			<small style="color: red"> <form:errors path="notes" />
			</small>
			<button>Submit</button>
	</form:form>
</div>
</body>
</html>