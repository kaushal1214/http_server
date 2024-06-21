var express = require('express');
var router = express.Router();
var auth = require('../middlewares/auth')

let DB = [];

router.post('/login',function(req,res){
  if(req.body.user=="cdac" && req.body.password=="diot"){
    const token = auth.token();
    res.status(200).json({authToken:token});
  } else {
    res.status(400).json({message:'User name or password is incorrect'});
  }
})

/* GET home page. */
router.get('/', auth.authenticate, function(req, res, next) {
  res.render('index', { title: 'CDAC IoT Protocols' });
});

// GET request with JSON object
router.get('/json',(req,res)=>{
  res.status(200).json({sensor:'temp', value: '24.5', unit:'F'})
})

router.post('/sensor/value',(req,res)=>{
  DB.push(req.body);
  res.status(201).json({message:"Resource inserted"});
});

router.put('/sensor/value',(req,res)=>{
  let index = req.body.index;
  let value = req.body.value;
  
  if(DB.length >=index){
    DB[index] = value;
    res.status(200).json({message:'Resource updated'});
  } else {
    for(let i=0; i<=index; i++){
      DB.push(-1);
      console.log("PUT")
    }
    DB[index] = value;
    res.status(201).json({message:'Resource created'});
  }
  
});

router.get('/sensor/value', auth.authenticate, (req,res)=>{

  res.status(200).json({data: DB});
})

router.delete('/sensor/value/:index',(req,res)=>{
  if(req.params){
    let index = req.params.index;
    index==0?DB.splice(0,1): DB.splice(index,index)
  } else {
    DB =[];
  }
  res.status(200).json({message:'Resources deleted'})
})

router.get('/sensor/query/:id?',(req,res)=>{
  if(req.query.id >  DB.length){
    res.status(404).json({message: "Resource not available"})  
  } else {
    const result = DB[req.query.id];
    res.status(200).json({data: JSON.stringify(result)})
  }
})

module.exports = router;
