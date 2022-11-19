const express=require('express');
const router=express.Router();
const {home,about,service,screenshot,blog,contact}=require('../controllers/frontcontroller.js')

const{index,add_contact_details,manage_contact_details,add_contact_details_backend}=require('../controllers/admincontroller.js')

router.get('/',home)

router.get('/about',about)

router.get('/service',service)

router.get('/screenshot',screenshot)

router.get('/blog',blog)

router.get('/contact',contact)   

//////////////  admin router start ///////////////

router.get('/admin/index',index)

router.get('/admin/add-contact/:result?',add_contact_details)    

router.get('/admin/manage-contact',manage_contact_details)

router.post('/admin/add_contact_details_backend',add_contact_details_backend)

module.exports=router