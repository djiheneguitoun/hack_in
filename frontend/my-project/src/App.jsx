import React from 'react';
import './App.css';
import Acceuil from './Pages/Acceuil';
import Admin from './Pages/Admin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Doctor from './Pages/Doctor';



export default function App() {

  const doctors = [
    { name: "Amina", email: "la_malek@esi.dz", number: "0658211670" },
    { name: "Amina", email: "la_malek@esi.dz", number: "0658211670" },
    { name: "Amina", email: "la_malek@esi.dz", number: "0658211670" },
    { name: "Amina", email: "la_malek@esi.dz", number: "0658211670" }
  ];
  
  const patients = [
    { name: "Amina", date: "12-02-2003", hour1: "10:00h", hour2: "12:00h" },
    { name: "Amina", date: "12-02-2003", hour1: "10:00h", hour2: "12:00h"},
    { name: "Amina", date: "12-02-2003", hour1: "10:00h", hour2: "12:00h"},
    { name: "Amina", date: "12-02-2003", hour1: "10:00h", hour2: "12:00h"},
    { name: "Amina", date: "12-02-2003", hour1: "10:00h", hour2: "12:00h"}
  ];

  return (
    <Router>
     <Routes>
          <Route path="/" element={<Acceuil/>} />
          <Route path="/admin" element={<Admin doctors={doctors} />} />
          <Route path="/doctor" element={<Doctor onsites={patients} onlines={patients}/>} />
      </Routes>
  </Router>
   
  )
}