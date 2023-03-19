import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

const user = {
    name: "Narendra Singh",
    email: "ns.narru@gmail.com",
    age: 21,
    profession: "Mern Stack Developer"
};


// Production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/dist'));

    app.get('/', (req, res) => {
        res.sendFile(express.static('client/dist/index.html'), function(error){
            if(error){
                res.status(400).json({err : error});
            }
        });
    });
};


app.get('/user', (req, res) => {
    res.status(200).json(user);
});

app.get('/', (req, res) => {
    res.status(200).json({msg: "Hey, It's me your server"});
});

app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`));
