import React, { useState } from 'react';
import {
	Box,
	Paper,
	Stack,
	Typography,
	Chip,
	Divider,
	TextField,
	InputAdornment,
	Button,
	Avatar,
} from "@mui/material";
import { useNavigate, redirect } from "react-router-dom";
import GoogleLogin from "../components/GoogleLogin/GoogleLogin";
import { loginAuth, signupAuth } from "../services/api";
import { alert } from "../components/CustomAlert/alert";
import CustomTextField from "../components/CustomTextField";
import "./style.css";

const Auth = ({user, login, logout}) => {
	const [signup, setSignup] = useState(false);
	const [admin, setAdmin] = useState(false);
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [passwordConfirm, setPasswordConfirm] = useState(null);

	const [adminPin, setAdminPin] = useState(null);
	const navigate = useNavigate();

	// console.log(process.env.REACT_APP_RECAPTCHA_SECRET_KEY);
	const handleSubmit = async () => {
		if (signup) {
			let payload;

			if (password !== passwordConfirm || password.trim().length < 8) {
				alert({ message: "Passwords doesn't match", type: "error" });
			} else if (!name || name.trim().length <= 0) {
				alert({ message: "Please provide a Name", type: "error" });
			} else {

				if (admin) {
					payload = {
						name: name.trim(),
						email,
						password,
						passwordConfirm,
						admin,
						adminPin,
					};
				} else {
					payload = {
						name: name.trim(),
						email,
						password,
						passwordConfirm,
					};
				}
				try {
					const res = await signupAuth(payload);
					if (res.data.message === "success") {
						alert({
							message: "Successfully Logged In",
							type: "success",
						});
						window.location.reload();
						return navigate("/");
						
					}
					login(res.data.data.user);
				} catch (err) {
					alert({
						message: err.response.data.message,
						type: "error",
					});
				}
			}
		} else {
			const payload = {
				email,
				password,
			};
			try {
				const res = await loginAuth(payload);
				if (res.data.message === "success") {
					alert({
						message: "Successfully Logged In",
						type: "success",
					});
					window.location.reload();
					return navigate("/");
					// redirect("/");
				}
				login(res.data.data.user);
			} catch (err) {
				alert({
					message: err.response.data.message,
					type: "error",
				});
			}
		}
	};
	return (
		<div className="auth">
			<Paper
				elevation={5}
				sx={{
					maxWidth: "500px",
					minWidth: "350px",
					width: "30%",
					margin: "auto",
					p: "20px",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					border: "1px solid rgba(200, 200, 200, 0.3)",
					color: "white",
				}}
			>
				<Typography variant="h6" fontWeight="600">
					{signup ? "SIGNUP" : "LOGIN"}
				</Typography>

				<GoogleLogin login={login} user={user}></GoogleLogin>
				<br></br>
				<Typography variant="caption">OR</Typography>
				<br></br>
				{signup && (
					<>
						<CustomTextField
							onInput={(e) => setName(e.target.value)}
							label="Name"
							fullWidth={true}
						></CustomTextField>
						<br></br>
					</>
				)}

				<CustomTextField
					label="Email"
					type="email"
					onInput={(e) => setEmail(e.target.value)}
					fullWidth={true}
				></CustomTextField>
				<br></br>
				<CustomTextField
					label="Password"
					onInput={(e) => setPassword(e.target.value)}
					fullWidth={true}
					type="password"
					// helperText={"Password must have at least 8 characters"}
				></CustomTextField>
				{signup ? (
					<>
						<br></br>
						<CustomTextField
							label="Confirm Password"
							onInput={(e) => setPasswordConfirm(e.target.value)}
							fullWidth={true}
							type="password"
						></CustomTextField>
					</>
				) : null}

				<Button
					variant="contained"
					color="primary"
					type="submit"
					sx={{
						mt: "20px",
						ml: "20px",
					}}
					startIcon={<span class="material-icons">check</span>}
					onClick={handleSubmit}
				>
					{signup ? "signup" : "Login"}
				</Button>

				<Typography variant="caption">
					{signup
						? "Already have an account?"
						: "Don't have an account?"}
					<Button variant="text" onClick={() => setSignup(!signup)}>
						{signup ? "Login" : "Signup"}
					</Button>
				</Typography>
			</Paper>
		</div>
	);
}
 
export default Auth;