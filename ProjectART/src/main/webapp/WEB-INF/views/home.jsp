<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>Home</title>
</head>
<body>
<h1>
	Hello world!  
</h1>
<form action="/userInfoPost" method="post">
	<input type="number" name="usertype" value="1">
	<input type="email" name="email" value="test@gmail.com">email
	<input type="password" name="password" value="1234">pwd
	<input type="text" name="name" value="testName">name
	<input type="submit" value="submit">
</form>
<P>  The time on the server is ${serverTime}. </P>
</body>
</html>
