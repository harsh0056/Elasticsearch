import Express  from "express";
const app = Express();
const PORT=4000;

app.get('/',(req,res)=>{
    res.send('welcome to my app');
})


app.get('/gotError',(req,res)=>{
try {
    throw new Error("got Error");
} catch (error) {
    console.log("sommething went wrong! Try Again");
    res.status(500).send('Caught Error');
}
})


app.listen(PORT,()=>{console.log("server started on port 4000")});