router.post("/register-event",
async(req,res)=>{

const event =
new Webinar(req.body);

await event.save();

res.json({
message:"Event Registered"
});

});

