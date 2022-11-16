const home=(req,res)=>{
    res.render('home',{title:'home'})
}

const about=(req,res)=>{
    res.render('about',{title:'about'})
}

const service=(req,res)=>{
    res.render('service',{title:'service'})
}

const screenshot=(req,res)=>{
    res.render('screenshot',{title:'screenshot'})
}

const blog=(req,res)=>{
    res.render('blog',{title:'blog'})
}

const contact=(req,res)=>{
    res.render('contact',{title:'contact'})
}

module.exports={home,about,service,screenshot,blog,contact}