import React from 'react';
import './App.css';
import Acceuil from './Pages/Acceuil';
import Admin from './Pages/Admin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Doctor from './Pages/Doctor';
import Doctor2 from './Pages/Doctor2';
import Doctor3 from './Pages/Doctor3';
import Users from './Pages/Users';
import DoctorDetails from './Pages/DoctorDetails';
import Login from './Pages/login';
import Signup from './Pages/Signup';
import UserAppointement from './Pages/UserAppointement';
import Settings from './Pages/SettingsUser';



export default function App() {

  const doctors = [
    { name: "Nesrine", email: "la_malek@esi.dz", number: "0658211670" },
    { name: "Nesrine", email: "la_malek@esi.dz", number: "0658211670" },
    { name: "Nesrine", email: "la_malek@esi.dz", number: "0658211670" },
    { name: "Nesrine", email: "la_malek@esi.dz", number: "0658211670" },
    { name: "Nesrine", email: "la_malek@esi.dz", number: "0658211670" },
    { name: "Nesrine", email: "la_malek@esi.dz", number: "0658211670" },
    { name: "Nesrine", email: "la_malek@esi.dz", number: "0658211670" }
  ];

  const patients = [
    { name: "Amina", date: "12-02-2003", hour1: "10:00h", hour2: "12:00h" },
    { name: "Amina", date: "12-02-2003", hour1: "10:00h", hour2: "12:00h" },
    { name: "Amina", date: "12-02-2003", hour1: "10:00h", hour2: "12:00h" },
    { name: "Amina", date: "12-02-2003", hour1: "10:00h", hour2: "12:00h" }
  ];

  const doctorss = [
    { name: "Amina", date: "12-02-2003", hour1: "10:00h", hour2: "12:00h" },
    { name: "Amina", date: "12-02-2003", hour1: "10:00h", hour2: "12:00h" },
    { name: "Amina", date: "12-02-2003", hour1: "10:00h", hour2: "12:00h" }
  ];

  const users = [
    { name: "Amina", place: "Azazga", desc: "Dedicated psychiatrist providing compassionate care. Expert in mood disorders and anxiety treatment. Committed to personalized, holistic approaches. Board Certified." },
    { name: "Nesrine", place: "Azazga", desc: "Dedicated psychiatrist providing compassionate care. Expert in mood disorders and anxiety treatment. Committed to personalized, holistic approaches. Board Certified." },
    { name: "Aiche", place: "Azazga", desc: "Dedicated psychiatrist providing compassionate care. Expert in mood disorders and anxiety treatment. Committed to personalized, holistic approaches. Board Certified." },
    { name: "Djihene", place: "Azazga", desc: "Dedicated psychiatrist providing compassionate care. Expert in mood disorders and anxiety treatment. Committed to personalized, holistic approaches. Board Certified." },
    { name: "Manar", place: "Azazga", desc: "Dedicated psychiatrist providing compassionate care. Expert in mood disorders and anxiety treatment. Committed to personalized, holistic approaches. Board Certified." },
  ];

  const reviews = [
    { titre: "Dedicated psychiatrist providing compassionate care. Expert in mood disorders and anxiety treatment. Committed to personalized, holistic approaches. Board Certified." },
    { titre: "Dedicated psychiatrist providing compassionate care. Expert in mood disorders and anxiety treatment. Committed to personalized, holistic approaches. Board Certified." },
    { titre: "Dedicated psychiatrist providing compassionate care. Expert in mood disorders and anxiety treatment. Committed to personalized, holistic approaches. Board Certified." },
  ];

  const user = { name: "Amina", place: "Azazga", desc: "Dedicated psychiatrist providing compassionate care. Expert in mood disorders and anxiety treatment. Committed to personalized, holistic approaches. Board Certified.", ccp: "1387290839830903093" }


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/admin" element={<Admin doctors={doctors} />} />
        <Route path="/doctor" element={<Doctor onsites={patients} onlines={patients} />} />
        <Route path="/doctor/calendar" element={<Doctor2 />} />
        <Route path="/doctor/profile" element={<Doctor3 />} />
        <Route path="/user/doctors" element={<Users users={users} />} />
        <Route path="/user/doctors/moreDetails" element={<DoctorDetails reviews={reviews} user={user}/>} />
        {/* <Route path="/user/experience" element={</>} /> */}
        <Route path="/user/appointement" element={<UserAppointement onsites={doctorss} onlines={doctorss} />} />
        <Route path="/user/profile" element={<Settings />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </Router>

  )
}