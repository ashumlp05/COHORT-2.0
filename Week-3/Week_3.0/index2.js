const express=require("express")
const app=express();
const zod=require("zod")

app.use(express.json());

const schema=zod.array(zod.number());

const schema =zod.object({
  email: zod.string(),
  password: zod.string(),
  country: z.literal("IN".or(z.literal("US")))
  kidneys
})



app.post('/health-checkup', function(req,res){
  const kidneys =req.body.kidneys;
  const response= schema.safeParse(kidneys)
  if(!response.success){
    res.status(411).json({
      msg:"Input is invalid"
    })
  }
  res.send({
    response
  })

});



app.listen(5000);