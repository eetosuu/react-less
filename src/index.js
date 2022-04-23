import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {CircularProgress, createTheme, ThemeProvider} from "@mui/material";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import  persistor, { store } from "./store";
import { PersistGate } from 'redux-persist/integration/react'

const theme = createTheme({
    palette: {
        primary: {
            light:'#ffffff',
            main:'#e9ecf1',
            dark:'#b8b8bb',
        },
        dark: {
            light:'#b8b8bb',
            main:'#597ba0',
            dark:'#486a8d',
        },
    },
});

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate persistor={persistor} loading={ <CircularProgress />}>
      <ThemeProvider theme={theme}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </ThemeProvider>
          </PersistGate>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
