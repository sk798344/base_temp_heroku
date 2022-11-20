const ContactdetailModel=require('../models/Contactdetail')

const index=(req,res)=>{
   res.render('admin/index')
}

const add_contact_details=(req,res)=>{
  // console.log(req.params.result);
   res.render('admin/add_contact_details',{result:req.params.result});    
}

const manage_contact_details=async(req,res)=>{
   try{
      const result=await ContactdetailModel.find()
      //console.log(result)
      res.render('admin/manage_contact_details',{data:result});
   }catch(err){
     console.log(err)
   }
   
}   

const add_contact_details_backend=async(req,res)=>{
   try{    
      //console.log(req.body);     
      const doc=new ContactdetailModel({
         name:req.body.user_nam,phone:req.body.user_phone_number,email:req.body.user_email,message:req.body.user_message
       })
      const result=await doc.save()
      res.redirect('/admin/add-contact/success')
   }catch(err){
     console.log(err)
   }

}

const delete_contact_leads_details=async(req,res)=>{
   try{
    var result=await ContactdetailModel.findByIdAndDelete(req.params.id)
    res.redirect('/admin/manage-contact')
   }catch(err){
    console.log(err)
   }
}

const contact_form_backend=async(req,res)=>{
   var name=req.body.name;
   var contact_us=req.body.contact_us
   var email=req.body.email
   var message=req.body.message
   try{    
      //console.log(req.body);     
      const doc=new ContactdetailModel({
         name:name,phone:contact_us,email:email,message:message
       })
      const result=await doc.save()
      res.send(result)
   }catch(err){
     console.log(err)
   }

}

module.exports={index,add_contact_details,manage_contact_details,add_contact_details_backend,delete_contact_leads_details,contact_form_backend}