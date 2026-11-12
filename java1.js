router.post("/match",(req,res)=>{

const mentors = [

{
name:"Priya Sharma",
skill:"Web Development"
},

{
name:"Anjali Verma",
skill:"Digital Marketing"
}

];

const skill = req.body.skill;

const mentor = mentors.find(
m => m.skill === skill
);

res.json(mentor);

});
