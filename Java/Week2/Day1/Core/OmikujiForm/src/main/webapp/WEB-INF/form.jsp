<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
	crossorigin="anonymous">
<title>Omikuji Form</title>
</head>
<body>
	<div class="container">
		<h1>Send an Omikuji!</h1>
		<form action="/processFrom" method="post">
			<div class="form-group ">
				<label>Pick any number from 5 to 25</label> <input type="number"
				name="number"	class="form-control "  style="width: 10%">
			</div>
			<div class="form-group">
				<label>Enter the name of a city.</label> <input type="text"
				name="city"	class="form-control"  id="exampleInputPassword1" placeholder="City">
			</div>
			<div class="form-group">
				<label>Enter the name of any real person.</label> <input type="text"
				name="person"	class="form-control"  id="exampleInputPassword1" placeholder="Person">
			</div>
			<div class="form-group">
				<label>Enter professional endeavor or hobby.</label> <input
				name="hobby" type="text" class="form-control" id="exampleInputPassword1"
					placeholder="Activity">
			</div>
			<div class="form-group">
				<label>Enter any type of living thing.</label> <input type="text"
				name="thing"  class="form-control" id="exampleInputPassword1" placeholder="Thing">
			</div>
			<div class="form-group">
				<label>Say something nice to someone.</label>
				<textarea class="form-control" id="exampleFormControlTextarea1"
				name="message" rows="3"></textarea>

			</div>
			<p>Send and show a friend.</p>
			<button type="submit" class="btn btn-primary col-1 offset-11">Send</button>
		</form>
	</div>
</body>
</html>
