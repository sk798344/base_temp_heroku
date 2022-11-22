const add_slider_details=(req,res)=>{
   res.render('admin/add_slider',{result:req.params.result})
}

const manage_slider_details=(req,res)=>{
   res.render('admin/manage_slider')
}

module.exports={add_slider_details,manage_slider_details}