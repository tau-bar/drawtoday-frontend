import {
	Box,
	Button,
	CircularProgress,
	Modal,
	TextField,
	Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, signUp } from "../../redux-saga/actions";
import { RootState } from "../../redux-saga/interfaces/states.interfaces";
import "./LoginModal.scss";

const LoginModal = () => {
	const style = {
		display: "flex",
		flexDirection: "column",
		position: "absolute" as "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
	};

	const textInputStyle = {
		marginTop: "10px",
		marginBottom: "10px",
	};

	const dispatch = useDispatch();
	const {
		user: { userId, isLoginLoading, loginError },
	} = useSelector((state: RootState) => state);

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");

	const [isLoginMode, setIsLoginMode] = useState(true);

	useEffect(() => {
		setError(loginError);
	}, [loginError]);

	useEffect(() => {
		setUsername("");
		setPassword("");
		setError("");
	}, [isLoginMode, userId]);

	const handleLogin = () => {
		setError("");
		if (username === "") {
			setError("Username cannot be empty.");
			return;
		}

		if (password === "") {
			setError("Please enter your password.");
			return;
		}

		dispatch(login(username, password));
	};

	const handleSignUp = () => {
		setError("");
		if (username === "") {
			setError("Username cannot be empty.");
			return;
		}

		if (password === "") {
			setError("Please enter your password.");
			return;
		}

		if (confirmPassword === "") {
			setError("Please enter your password again.");
			return;
		}

		if (password !== confirmPassword) {
			setError("Passwords do not match.");
			return;
		}

		dispatch(signUp(username, password));
	};

	return (
		<Modal
			open={userId === 0}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box>
				{isLoginLoading && (
					<Container sx={style}>
						<CircularProgress />
					</Container>
				)}
				{!isLoginLoading && (
					<Container sx={style}>
						<Typography
							id="modal-modal-title"
							variant="h6"
							component="h2"
						>
							{isLoginMode ? "Log in to drawtoday:" : "Sign up:"}
						</Typography>
						<TextField
							sx={textInputStyle}
							id="outlined-username-input"
							label="Username"
							autoComplete="current-username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<TextField
							sx={textInputStyle}
							id="outlined-password-input"
							label="Password"
							type="password"
							autoComplete="current-password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						{!isLoginMode && (
							<TextField
								sx={textInputStyle}
								id="outlined-password-input"
								label="Confirm Password"
								type="password"
								autoComplete="current-password"
								value={confirmPassword}
								onChange={(e) =>
									setConfirmPassword(e.target.value)
								}
							/>
						)}
						<p className="LoginModalError">{error}</p>
						{isLoginMode && (
							<Button variant="contained" onClick={handleLogin}>
								Log in
							</Button>
						)}
						{!isLoginMode && (
							<Button variant="contained" onClick={handleSignUp}>
								Sign Up
							</Button>
						)}

						{isLoginMode && (
							<p>
								Don't have an account?{" "}
								<span
									onClick={() => setIsLoginMode(false)}
									className="ChangeLoginMode"
								>
									Sign up
								</span>
							</p>
						)}
						{!isLoginMode && (
							<p>
								Already have an account?{" "}
								<span
									onClick={() => setIsLoginMode(true)}
									className="ChangeLoginMode"
								>
									Log in
								</span>
							</p>
						)}
					</Container>
				)}
			</Box>
		</Modal>
	);
};

export default LoginModal;
