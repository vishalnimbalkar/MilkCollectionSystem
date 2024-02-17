import express from 'express'
import cors from 'cors'

const app = express();
// app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})

app.get("/",(req, res)=>{
    res.send("hello world")
})