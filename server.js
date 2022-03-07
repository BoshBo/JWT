const express=require('express');// هذا فريم وورك او موديول مفيد للتواصل 
const app = express(); //  اسم لاوبجكت واخذ كل الفنكشن تبع الاكسبرسس app 
const jwt =require('jsonwebtoken');
app.use(express.json());//ميثود تسمح لي بأستخدام الجيسون للاكسبرس 

app.get('/' , (req,res)=>{
    res.send("hello")
});
const userInfo =[
 
    {
        username : 'boshra',
        age: '23',
        pass: '1234'

    },
    {
        username : 'mohammed',
        age: '34',
        pass: '1234'
        
    }


]
app.get('/info' ,virfyToken, (req,res)=>{
    res.json(userInfo.filter(post => post.username === req.user.name));

});


app.post('/login', (req,res)=>{
const username = req.body.username
const user ={name :username} 
const token = jwt.sign(user ,'secKey')
res.json({token :token});
});

function virfyToken (req,res,next){
const authHeader = req.headers['authorization'];
const token = authHeader && authHeader.split(' ')[1]

if (token == null ) res.sendStatus(401)
jwt.verify(token , 'secKey', (err,user)=>{
if (err) res.sendStatus(403)
req.user=user
next();
})
};


app.listen(2000, function () {
    console.log("server started");
  });
  