<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
	crossorigin="anonymous">
<title>Insert title here</title>
</head>
<body>
	<div class="container">
		<h1>Here's your Omikuji!</h1>
		<div class="container col-10 offset-1"   style="background-color: #9FC5F8; font-size:30px ">
			<p>In ${number} years, you will live in ${city } with ${person }
				as your room mate, ${hobby } for a living.</h4>
			<p>The next time you will see a ${thing } you may have good luck.</p>
			<p>${message } </h4>		
		</div>
	</div>

</body>

</html>