const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT ||5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
 
app.get('/api/hello' , (req,res) => {
   res.send({message: 'Hello Express!'}) ;
});

app.get('/api/customers',(req,res) =>{
   res.send([      
         {
           'id' :1,
           'imgae' : 'https://placeimg.com/64/64/1',
           'name' : '홍길동',
           'birthday' : '961222',
           'gender' : '남자',
           'job' : 'student'
         }  ,
         {
           'id' :2,
           'imgae' : 'https://placeimg.com/64/64/2',
           'name' : '김영빈',
           'birthday' : '951222',
           'gender' : '남자',
           'job' : 'student'
         }         
   ]);
});
app.listen(port, ()=> console.log(`Listening on port ${port}`));

