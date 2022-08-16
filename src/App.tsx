import { Brush, DynamicFeed } from "@mui/icons-material";
import {
	BottomNavigation,
	BottomNavigationAction,
	CssBaseline,
	Paper,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import TopAppBar from "./components/app-bar/AppBar";
import LoginModal from "./components/login-modal/LoginModal";
import BrowsePage from "./pages/browse-page/BrowsePage";
import DrawPage from "./pages/draw-page/DrawPage";
import { changePage, clearPosts } from "./redux-saga/actions";
import { RootState } from "./redux-saga/reducers/rootReducer";

const App = () => {
	const dispatch = useDispatch();
	const {
		theme: { mode },
		page: { pageNumber },
		user: { userId },
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
							default: "#39ace7",
							paper: "#9bd4e4",
						},
				  }
				: {
						background: {
							default: "#000",
							paper: "#0A1929",
						},
				  }),
		},
		typography: {},
	});

	const pages = [<DrawPage />, <BrowsePage />];

	const setPage = (newPageNumber: number) => {
		dispatch(changePage(newPageNumber));
	};

	return (
		<ThemeProvider theme={muiTheme}>
			<CssBaseline />
			<div className="App">
				<TopAppBar />
				<LoginModal />
				{pages[pageNumber]}
				<Paper
					sx={{
						position: "fixed",
						height: "60px",
						bottom: 0,
						left: 0,
						right: 0,
					}}
					elevation={3}
				>
					<BottomNavigation
						showLabels
						value={pageNumber}
						onChange={(_, newValue) => {
							setPage(newValue);
						}}
					>
						<BottomNavigationAction label="Draw" icon={<Brush />} />
						<BottomNavigationAction
							label="Browse"
							icon={<DynamicFeed />}
							onClick={() => dispatch(clearPosts())}
						/>
					</BottomNavigation>
				</Paper>
			</div>
		</ThemeProvider>
	);
};

export default App;
