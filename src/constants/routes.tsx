// @pages
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/error-page";
import Home from "../pages/home";
import Login from "../pages/login";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "home",
				element: <Home />,
			},
		],
	},
]);
