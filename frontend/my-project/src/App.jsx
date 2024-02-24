import React from 'react';
import './App.css';
import Acceuil from './Pages/Acceuil';
import Admin from './Pages/Admin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Doctor from './Pages/Doctor';
import Doctor2 from './Pages/Doctor2';
import Doctor3 from './Pages/Doctor3';
import User from './Components/User';
import Users from './Pages/Users';
import DoctorDetails from './Pages/DoctorDetails';
import DoctorProfile2 from './Components/DoctorProfile2';
import Settings from './Pages/Settings';
import Login from './Pages/login';
import Signup from './Pages/Signup'



export default function App() {

  const doctors = [
    { name: "Amina", email: "la_malek@esi.dz", number: "0658211670" },
    { name: "Amina", email: "la_malek@esi.dz", number: "0658211670" },
    { name: "Amina", email: "la_malek@esi.dz", number: "0658211670" },
    { name: "Amina", email: "la_malek@esi.dz", number: "0658211670" },
    { name: "Amina", email: "la_malek@esi.dz", number: "0658211670" },
    { name: "Amina", email: "la_malek@esi.dz", number: "0658211670" },
    { name: "Amina", email: "la_malek@esi.dz", number: "0658211670" },
    { name: "Amina", email: "la_malek@esi.dz", number: "0658211670" }
  ];

  const patients = [
    { name: "Amina", date: "12-02-2003", hour1: "10:00h", hour2: "12:00h" },
    { name: "Amina", date: "12-02-2003", hour1: "10:00h", hour2: "12:00h" },
    { name: "Amina", date: "12-02-2003", hour1: "10:00h", hour2: "12:00h" },
    { name: "Amina", date: "12-02-2003", hour1: "10:00h", hour2: "12:00h" },
    { name: "Amina", date: "12-02-2003", hour1: "10:00h", hour2: "12:00h" },
    { name: "Amina", date: "12-02-2003", hour1: "10:00h", hour2: "12:00h" }
  ];

  const users = [
    { name: "Amina", place: "Azazga", desc: "Dedicated psychiatrist providing compassionate care. Expert in mood disorders and anxiety treatment. Committed to personalized, holistic approaches. Board Certified." },
    { name: "Amina", place: "Azazga", desc: "Dedicated psychiatrist providing compassionate care. Expert in mood disorders and anxiety treatment. Committed to personalized, holistic approaches. Board Certified." },
    { name: "Amina", place: "Azazga", desc: "Dedicated psychiatrist providing compassionate care. Expert in mood disorders and anxiety treatment. Committed to personalized, holistic approaches. Board Certified." },
    { name: "Amina", place: "Azazga", desc: "Dedicated psychiatrist providing compassionate care. Expert in mood disorders and anxiety treatment. Committed to personalized, holistic approaches. Board Certified." },
    { name: "Amina", place: "Azazga", desc: "Dedicated psychiatrist providing compassionate care. Expert in mood disorders and anxiety treatment. Committed to personalized, holistic approaches. Board Certified." },
    { name: "Amina", place: "Azazga", desc: "Dedicated psychiatrist providing compassionate care. Expert in mood disorders and anxiety treatment. Committed to personalized, holistic approaches. Board Certified." }
  ];

  const reviews = [
    { titre: "Dedicated psychiatrist providing compassionate care. Expert in mood disorders and anxiety treatment. Committed to personalized, holistic approaches. Board Certified." },
    { titre: "Dedicated psychiatrist providing compassionate care. Expert in mood disorders and anxiety treatment. Committed to personalized, holistic approaches. Board Certified." },
    { titre: "Dedicated psychiatrist providing compassionate care. Expert in mood disorders and anxiety treatment. Committed to personalized, holistic approaches. Board Certified." },
    { titre: "Dedicated psychiatrist providing compassionate care. Expert in mood disorders and anxiety treatment. Committed to personalized, holistic approaches. Board Certified." },
    { titre: "Dedicated psychiatrist providing compassionate care. Expert in mood disorders and anxiety treatment. Committed to personalized, holistic approaches. Board Certified." },
    { titre: "Dedicated psychiatrist providing compassionate care. Expert in mood disorders and anxiety treatment. Committed to personalized, holistic approaches. Board Certified." }
  ];

  const user = { name: "Amina", place: "Azazga", desc: "Dedicated psychiatrist providing compassionate care. Expert in mood disorders and anxiety treatment. Committed to personalized, holistic approaches. Board Certified.", ccp: "111111111111111" }


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/admin" element={<Admin doctors={doctors} />} />
        <Route path="/doctor" element={<Doctor onsites={patients} onlines={patients} />} />
        <Route path="/doctor2" element={<Doctor2 />} />
        <Route path="/doctor3" element={<Doctor3 />} />
        <Route path="/users" element={<Users users={users} />} />
        <Route path="/doctorDetails" element={<DoctorDetails reviews={reviews} user={user} />} />
         <Route path="/" element={<Acceuil/>} />
          <Route path="/admin" element={<Admin doctors={doctors} />} />
          <Route path="/doctor" element={<Doctor onsites={patients} onlines={patients}/>} />
          <Route path="/doctor2" element={<Doctor2/>} />
          <Route path="/doctor3" element={<Doctor3/>} />

          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </Router>

  )
}