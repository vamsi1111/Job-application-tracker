import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import AddJob from "./pages/AddJob";

import JobList from "./pages/JobList";

import EditJob from "./pages/EditJob";

import Navbar from "./components/Navbar";



function App() {

  return (

    <BrowserRouter>
     <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/add" element={<AddJob />} />

        <Route path="/jobs" element={<JobList />} />

        <Route path="/edit/:id" element={<EditJob />} />

      </Routes>

    </BrowserRouter>

  );

}



export default App;