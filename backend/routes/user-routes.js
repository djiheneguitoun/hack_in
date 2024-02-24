const express= require('express');
const { login, signup , deleteDoctor , validatedoctor , modifyExperience,getAppointmentsForDoctor,searchbyadress,showcreneaulibre,
    liste_doctors,signupdoctor,getDoctorProfile,addcreaneau,validated_doctors,addrendezvous,search_illness,getexperiences,addcomment} = require('../controller/user-controller');

const router=express.Router();

router.post("/login",login);//ok
router.post("/signup",signup);//ok
router.post("/signupdoctors",signupdoctor);//okk
router.delete("/doctors/:doctorId", deleteDoctor);//okk
router.put("/doctors/validate/:doctorId", validatedoctor);//okk
router.put("/modifyExp/:userId", modifyExperience);//okk
router.get('/doctors/appointments/:doctorName', getAppointmentsForDoctor);//okk
router.get('/doctors/search/:address', searchbyadress);//okk
router.get('/doctors/creneaulibre/:doctorName/:date', showcreneaulibre);//okk
router.get("/liste_doctors",liste_doctors);//okk
router.get("/doctors/:id",getDoctorProfile);//okk
router.post("/addcreneau",addcreaneau);//okk
router.get("/validated",validated_doctors);//okk
router.post("/addrendezvous",addrendezvous);//okk
router.post("/search",search_illness);
router.get("/getexperiences",getexperiences);
router.post("/doctors/:id",addcomment);
module.exports=router;
