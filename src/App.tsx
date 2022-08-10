import { Brush, DynamicFeed } from "@mui/icons-material";
import {
	BottomNavigation,
	BottomNavigationAction,
	CssBaseline,
	Paper,
} from "@mui/material";
import { cyan, deepOrange, grey, orange } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./App.scss";
import TopAppBar from "./components/app-bar/AppBar";
import LoginModal from "./components/login-modal/LoginModal";
import BrowsePage from "./pages/browse-page/BrowsePage";
import DrawPage from "./pages/draw-page/DrawPage";
import { RootState } from "./redux-saga/reducers/rootReducer";

const App = () => {
	const {
		theme: { mode },
	} = useSelector((state: RootState) => state);

	const muiTheme = createTheme({
		palette: {
			mode: mode,
			...(mode === "light"
				? {
						text: {
							primary: grey[900],
							secondary: grey[800],
						},
						background: {
							default: cyan[400],
							paper: orange[200],
						},
				  }
				: {
						background: {
							default: "#0A1929",
							paper: deepOrange[900],
						},
				  }),
		},
		typography: {},
	});

	const [currentPage, setCurrentPage] = useState(0);

	const pages = [<DrawPage />, <BrowsePage />];

	return (
		<ThemeProvider theme={muiTheme}>
			<CssBaseline />
			<div className="App">
				<TopAppBar />
				<LoginModal />
				{pages[currentPage]}
				<Paper
					sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
					elevation={3}
				>
					<BottomNavigation
						showLabels
						value={currentPage}
						onChange={(_, newValue) => {
							setCurrentPage(newValue);
						}}
					>
						<BottomNavigationAction label="Draw" icon={<Brush />} />
						<BottomNavigationAction
							label="Browse"
							icon={<DynamicFeed />}
						/>
					</BottomNavigation>
				</Paper>
			</div>
		</ThemeProvider>
	);
};

export default App;
