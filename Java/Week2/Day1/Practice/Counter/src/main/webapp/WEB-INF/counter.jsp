<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h2>You visited this site ${count} times. </h2>
	<h2> <a href="/">Test another visit ?</a> </h2>
	<h2> <a href="/plus2">Test a double visit ?</a> </h2>
	<form action="/reset" method="get">
	<button>Reset Counter</button>
	</form>
</body>

</html>