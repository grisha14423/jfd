import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/navBar";

import Login from "./layouts/login";
import Main from "./layouts/main";
import Users from "./layouts/users";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/users">
          <Route index element={<Users />} />
          <Route path=":userId" element={<Users />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/" exact element={<Main />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
