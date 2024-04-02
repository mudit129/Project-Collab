import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import UserProfile from "./pages/User/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:activepage" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
