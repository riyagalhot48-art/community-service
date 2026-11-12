router.post("/career-suggestion",(req,res)=>{

const skill = req.body.skill;

let recommendation = "";

if(skill === "Web Development"){
recommendation =
"Frontend Developer, Full Stack Developer";
}

else if(skill === "Digital Marketing"){
recommendation =
"SEO Specialist, Marketing Manager";
}

else{
recommendation =
"Explore General Career Training";
}

res.json({
recommendation
});

});
