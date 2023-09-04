import React, { useEffect } from "react";
import "./App.css";
import { useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";

function App() {
	const navigate = useNavigate();
	const location = useLocation();
	const isLoggedIn = localStorage.getItem("isLoggedIn");

	useEffect(() => {
		const shouldRedirect = !isLoggedIn || isLoggedIn === "false";
		if (shouldRedirect && location.pathname !== "/login") {
			navigate("/login", { replace: true });
		}
	}, [navigate, isLoggedIn, location.pathname]);

	return (
		<div className='App'>{isLoggedIn === "true" ? <Home /> : <Login />}</div>
	);
}

export default App;
