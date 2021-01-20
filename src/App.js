import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import LoginPage from "./Container/LoginPage";
import Dashboard from "./Container/Dashboard";

function App(props) {
  return (
    <BrowserRouter>
      <Route path="/login" render={(props) => <LoginPage />} />
      <Route path="/dashboard" render={(props) => <Dashboard />} />
      <Redirect from="/" to={"/login"} />
    </BrowserRouter>
  );
}

export default App;
