import {
  Brightness4,
  Brightness7,
  Brush,
  DynamicFeed,
} from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,
  CssBaseline,
  IconButton,
  Paper,
} from "@mui/material";
import { cyan, deepOrange, grey, orange } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import { THEME } from "./config/constants";
import BrowsePage from "./pages/browse-page/BrowsePage";
import DrawPage from "./pages/draw-page/DrawPage";
import { toggleTheme } from "./redux-saga/actions";
import { RootState } from "./redux-saga/reducers/rootReducer";

const App = () => {
  const dispatch = useDispatch();
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
        <IconButton
          sx={{ ml: 1, position: "fixed", right: 10, top: 20 }}
          className="ThemeToggle"
          onClick={() => setTimeout(() => dispatch(toggleTheme()), 200)}
          color="inherit"
        >
          {mode === THEME.DARK ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
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
            <BottomNavigationAction label="Browse" icon={<DynamicFeed />} />
          </BottomNavigation>
        </Paper>
      </div>
    </ThemeProvider>
  );
};

export default App;
