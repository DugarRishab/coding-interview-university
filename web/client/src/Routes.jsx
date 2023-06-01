import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Flutter from "./pages/Flutter";


const AllRoutes = ({userLocation, setUserLocation, user, login, logout}) => {
	return (
		<Routes>
			<Route
				exact
				path="/"
				element={
					<Home login={login} logout={logout} user={user}></Home>
				}
			></Route>
			<Route
				exact
				path="/flutter"
				element={
					<Flutter login={login} logout={logout} user={user}></Flutter>
				}
			></Route>
			<Route
				exact
				path="/auth"
				element={
					<Auth
						login={login}
						logout={logout}
						user={user}
						userLocation={userLocation}
						setUserLocation={setUserLocation}
					></Auth>
				}
			></Route>
		</Routes>
	);
}

export default AllRoutes;