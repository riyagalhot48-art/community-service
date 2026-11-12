const jwt = require("jsonwebtoken");

router.post("/login", async(req,res)=>{

const user = await User.findOne({
email:req.body.email
});

if(!user){
return res.status(400).json({
message:"User not found"
});
}

const validPassword =
await bcrypt.compare(
req.body.password,
user.password
);

if(!validPassword){
return res.status(400).json({
message:"Wrong password"
});
}

const token = jwt.sign(
{id:user._id},
"SECRET_KEY",
{expiresIn:"7d"}
);

res.json({token});

});
