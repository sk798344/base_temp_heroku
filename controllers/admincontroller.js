const ContactdetailModel=require('../models/Contactdetail')

const index=(req,res)=>{
   res.render('admin/index')
}

const add_contact_details=(req,res)=>{
   res.render('admin/add_contact_details');
}

const manage_contact_details=(req,res)=>{
   res.render('admin/manage_contact_details');
}

const add_contact_details_backend=async(req,res)=>{
   try{
      console.log(req.body);
      const doc=new ContactdetailModel({
         name:req.body.user_nam,phone:req.body.user_phone_number,email:req.body.user_email,message:req.body.user_message
       })
      const result=await doc.save()
      res.send('Data add successfully')
   }catch(err){
     console.log(err)
   }

}

module.exports={index,add_contact_details,manage_contact_details,add_contact_details_backend}