let express = require('express');
let app = express();
var fileupload = require("express-fileupload");
let fs = require('fs');
app.use(fileupload());

app.get('/', function(req, res) {
    res.status(200).json({})
});

app.post('/upload', function(req, res) {
    if(req.files && req.files.file ){
        let doc = req.files.file ;
        let fileName = doc.name ? doc.name : "temp";
        let data = doc.data? doc.data:null;

        fs.writeFile(fileName, data, 'utf8', ()=>{
            res.status(200).json({"message": "uploaded file"})
        });
    }
    else{
        res.status(400).json({})
    }
});


app.listen(3002, () =>{
    console.log('server is running at port 3002');
    
})