const express = require('express');

const app = express();
app.use(express.urlencoded({extended:false}));

app.listen(3000,()=>console.log('Server run on port 3000'))