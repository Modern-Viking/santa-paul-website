const express = require('express');
const app = express();
const path = require('path');
const routes = require('./Backend/routes');
const mongoose = require('mongoose');

const port = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if(process.env.NODE_ENV === "production"){
    app.use(express.static("./client/build"));
};

// const publicPath = path.join(__dirname, './client/build');
// app.use(express.static(publicPath));

app.use(routes);

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
//  });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/santa-paul-website", { useNewUrlParser :true, useUnifiedTopology: true});

app.listen(port, () => {
    console.log("Server is on port" + port + "!")
});