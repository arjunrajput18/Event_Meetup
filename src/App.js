import React, { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { MeetingDetails } from "./pages/MeetingDetails/MeetingDetails";
import { initalizeEvent } from "./actions/eventActions";
import { useDispatch } from "react-redux";
import { data } from "./data/data";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initalizeEvent(data));
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meetingDetails/:id" element={<MeetingDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
