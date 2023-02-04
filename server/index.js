const express = require("express");
const mongoose = require("mongoose");
const BodyParser = require("body-parser");
const app = express();
const projectApi = require("./controlleur/controlleurProject");
const taskApi = require("./controlleur/controlleurTask");






app.use(BodyParser.json());
app.use(BodyParser.urlencoded({
    extended: true}));
app.use("/api/project", projectApi);
app.use("/api/task", taskApi);


mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://najeh:najeh654321@cluster0.jsh0zc1.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie!'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  app.get('/userTest', (req, res)=>{

    res.send("test");
});







app.listen(5000, ()=>{
    console.log("backend server is running! hello word");

})