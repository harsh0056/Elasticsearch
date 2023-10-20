import Express  from "express";
import logger from './logger.js';
const app = Express();
const PORT=4000;

app.get('/',(req,res)=>{
    logger.info("this is / route called");
    res.status(200).send('welcome to my app');
})


app.get('/gotError',(req,res)=>{
try {
    logger.info("got error");
    throw new Error("got Error");
} catch (error) {
    logger.debug("sommething went wrong! Try Again");
    res.status(500).send('Caught Error');
}
})


app.listen(PORT,()=>{logger.info("server started on port 4000")});