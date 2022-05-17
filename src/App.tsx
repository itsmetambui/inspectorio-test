import * as React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './routes/Home';
import User from './routes/User';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:username" element={<User />} />
      </Routes>
  );
}
