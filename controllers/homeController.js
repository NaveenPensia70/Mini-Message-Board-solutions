 const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];
const homePage= (req,res)=>{
 
  res.render("index",{messages});
}
const handleSubmit= (req,res)=>{
  const {userName,message}=req.body;
  messages.push({
    text: message,
    user: userName,
    added: new Date()
  });
  res.redirect("/");
}

export  {homePage,handleSubmit};