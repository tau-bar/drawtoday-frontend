import { Brightness4, Brightness7 } from "@mui/icons-material";
import {
	AppBar,
	Box,
	Button,
	IconButton,
	Paper,
	Toolbar,
	Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { THEME } from "../../config/constants";
import { logout, toggleTheme } from "../../redux-saga/actions";
import { RootState } from "../../redux-saga/reducers/rootReducer";

export const TopAppBar = () => {
	const dispatch = useDispatch();
	const {
		theme: { mode },
		user: { userId },
	} = useSelector((state: RootState) => state);
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Paper>
					<Toolbar>
						<IconButton
							onClick={() =>
								setTimeout(() => dispatch(toggleTheme()), 200)
							}
							color="inherit"
						>
							{mode === THEME.DARK ? (
								<Brightness7 />
							) : (
								<Brightness4 />
							)}
						</IconButton>
						<Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 1 }}
						>
							drawtoday
						</Typography>
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
