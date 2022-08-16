import { Brightness7, DarkMode } from "@mui/icons-material";
import { AppBar, Box, Button, IconButton, Paper, Toolbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { THEME } from "../../config/constants";
import lightModeImg from "../../drawtoday_black.png";
import darkModeImg from "../../drawtoday_white.png";
import { logout, toggleTheme } from "../../redux-saga/actions";
import { RootState } from "../../redux-saga/reducers/rootReducer";
import "./AppBar.scss";

export const TopAppBar = () => {
	const dispatch = useDispatch();
	const {
		theme: { mode },
		user: { userId },
	} = useSelector((state: RootState) => state);
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="sticky">
				<Paper>
					<Toolbar className="AppBar">
						<IconButton
							onClick={() =>
								setTimeout(() => dispatch(toggleTheme()), 200)
							}
							color="inherit"
						>
							{mode === THEME.DARK ? (
								<Brightness7 />
							) : (
								<DarkMode />
							)}
						</IconButton>
						<img
							className="AppbarLogo"
							src={
								mode === THEME.DARK ? darkModeImg : lightModeImg
							}
						></img>
						{userId !== 0 && (
							<Button
								color="inherit"
								onClick={() => dispatch(logout())}
							>
								Logout
							</Button>
						)}
					</Toolbar>
				</Paper>
			</AppBar>
		</Box>
	);
};

export default TopAppBar;
