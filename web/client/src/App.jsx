import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ReactDOM from "react-dom/client";

import "./App.css";
import Navbar from "./components/Navbar";
import AllRoutes from "./Routes";
import { useState } from "react";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

export const themeOptions = {
	palette: {
		type: "dark",
		primary: {
			main: "rgb(88,166,255)",
		},
		secondary: {
			main: "rgb(51, 110, 177)",
		},
		background: {
			default: "rgb(13,17,23)",
			paper: "rgb(22,27,34)",
		},
		success: {
			main: "#27c52f",
		},
		text: {
			primary: "rgb(246, 248, 250)",
		},
	},
	typography: {
		fontFamily: "Poppins",
		color: "rgb(246, 248, 250)",
	},
	overrides: {
		MuiAppBar: {
			colorInherit: {
				backgroundColor: "#111111",
				color: "#fff",
			},
		},
	},
	props: {
		MuiAppBar: {
			color: "secondary",
		},
	},
};

const theme = createTheme(themeOptions);


function App() {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("user")) || null
	);
	const { innerWidth: width, innerHeight: height } = window;

	const login = (userData) => {
		setUser(userData);
		localStorage.setItem("user", JSON.stringify(userData));
	};
	const logout = () => {
		setUser(null);
		localStorage.setItem("user", JSON.stringify(null));
	};

	const [menuOpen, setMenuOpen] = useState(false);
	const handleDrawerOpen = () => {
		setMenuOpen(true);
	};

	const handleDrawerClose = () => {
		setMenuOpen(false);
	};

	return (
		<ThemeProvider theme={theme}>
			<GoogleOAuthProvider clientId="326838942005-162k8q323tub50v1g6flditpt10b7tq2.apps.googleusercontent.com">
				<div className="App">
					<Router>
						<Navbar
							user={user}
							login={login}
							logout={logout}
							menuOpen={menuOpen}
							handleDrawerOpen={handleDrawerOpen}
							handleDrawerClose={handleDrawerClose}
						></Navbar>
						{/* {width <= 720 && (
							<Menu
								menuOpen={menuOpen}
								handleDrawerOpen={handleDrawerOpen}
								handleDrawerClose={handleDrawerClose}
							></Menu>
						)} */}

						<AllRoutes
							user={user}
							login={login}
							logout={logout}
						></AllRoutes>
						<Footer></Footer>
					</Router>
				</div>
			</GoogleOAuthProvider>
		</ThemeProvider>
	);
}

export default App;
