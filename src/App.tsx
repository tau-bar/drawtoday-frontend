import { Brightness4, Brightness7 } from "@mui/icons-material";
import { CssBaseline, IconButton } from "@mui/material";
import { cyan, deepOrange, grey, orange } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import { THEME } from "./config/constants";
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

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className="App">
        <IconButton
          className="ThemeToggle"
          sx={{ ml: 1 }}
          onClick={() => dispatch(toggleTheme())}
          color="inherit"
        >
          {mode === THEME.DARK ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        <DrawPage />
      </div>
    </ThemeProvider>
  );
};

export default App;
