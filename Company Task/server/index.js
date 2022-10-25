const express = require('express');
const cors = require('cors');
const mycon = require('mysql');
const bodyparser = require('body-parser');
const fileupload = require('express-fileupload');
const { response } = require('express');

const app = express();
app.use(cors());
app.use(fileupload());
app.use(bodyparser.json());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));

const c = mycon.createConnection({
    host : "localhost",

    user : "root",
    password : "Kgisl@123",
    database : "task1"
})

c.connect(function(err){
    if(err){console.log(err);}
    else{console.log('Database Connected');}
})

app.post('/Task1_insert',(request,response)=>{
    let title = request.body.title;
    let stage = 1;

    let sql = 'insert into new_task(title,stage) values (?,?)';

    c.query(sql,[title,stage],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"Inserted"};
            response.send(s);
        }
    })

})

app.get('/Task1_details_one',(request,response)=>{
    let sql = 'select * from new_task where stage=?';

    c.query(sql,[1],(error,result)=>{
        if(error){response.send(error);}
        else{response.send(result);}
    })

})

app.get('/Task1_details_two',(request,response)=>{
    let sql = 'select * from new_task where stage=?';

    c.query(sql,[2],(error,result)=>{
        if(error){response.send(error);}
        else{response.send(result);}
    })

})

app.get('/Task1_details_three',(request,response)=>{
    let sql = 'select * from new_task where stage=?';

    c.query(sql,[3],(error,result)=>{
        if(error){response.send(error);}
        else{response.send(result);}
    })

})

app.put('/Task1_m2/:id',(request,response)=>{
    let id = request.params.id;
    let sql = 'update new_task set stage=? where id=?';
    c.query(sql,[2,id],(err,res)=>{
        if(err){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"updated"};
            response.send(s);
        }
    })
})

app.put('/Task1_m3/:id',(request,response)=>{
    let id = request.params.id;
    let sql = 'update new_task set stage=? where id=?';
    c.query(sql,[3,id],(err,res)=>{
        if(err){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"updated"};
            response.send(s);
        }
    })
})

app.listen(3005);