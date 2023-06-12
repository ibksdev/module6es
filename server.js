const express= require('express');
const app = express();
const port = 8000;
app.use(express.static('public'))

app.get("/",(req,res)=>{
    // console.log(path.join(__dirname + "/index.html"));
    res.sendFile(path.join(__dirname + "/index.html"));
})


app.listen(port, ()=>{
    console.log(`Server Run Successfully at ${port}`)
});