const express=require('express');
const router=express.Router();
const {home,about,service,screenshot,blog,contact}=require('../controllers/frontcontroller.js')

const{index,add_contact_details,manage_contact_details,add_contact_details_backend,delete_contact_leads_details,contact_form_backend}=require('../controllers/admincontroller.js')


const{add_slider_details,manage_slider_details}=require('../controllers/slidercontroller')

router.get('/',home)
   
router.get('/about',about)

router.get('/service',service)

router.get('/screenshot',screenshot)

router.get('/blog',blog)     

router.get('/contact',contact)   

router.post('/contact_backend',contact_form_backend)
    
//////////////  admin router start ///////////////

router.get('/admin/index',index)     

router.get('/admin/add-contact/:result?',add_contact_details)    

router.get('/admin/manage-contact',manage_contact_details)

router.post('/admin/add_contact_details_backend',add_contact_details_backend)

router.post('/admin/delete_contact_details_backend/:id',delete_contact_leads_details)

router.get('/admin/add-slider/:result?',add_slider_details)

router.get('/admin/manage-slider',manage_slider_details)

module.exports=router