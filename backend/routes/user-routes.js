const express= require('express');
const { login, signup , deleteDoctor , validatedoctor , modifyExperience,getAppointmentsForDoctor,searchbyadress,showcreneaulibre} = require('../controller/user-controller');

const router=express.Router();

router.post("/login",login);
router.post("/signup",signup);
router.delete("/doctors/:doctorId", deleteDoctor);
router.put("/doctors/validate/:doctorId", validatedoctor);
router.put("/modifyExp/:userId", modifyExperience);
router.get('/doctors/appointments/:doctorName', getAppointmentsForDoctor);
router.get('/doctors/search/:address', searchbyadress);
router.get('/doctors/creneaulibre/:doctorName/:date', showcreneaulibre);


module.exports=router;
