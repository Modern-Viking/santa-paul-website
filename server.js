const express = require('express');
const app = express();
const path = require('path');
const routes = require('./Backend/routes');
const mongoose = require('mongoose');

const port = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const publicPath = path.join(__dirname, './client/build');
app.use(express.static(publicPath));

app.use(routes);

// app.get('*', (req, res) => {
//     res.sendFile(path.join(publicPath, 'index.html'));
//  });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/santa-paul-website", { useNewUrlParser :true, useUnifiedTopology: true});

app.listen(port, () => {
    console.log("Server is on port" + port + "!")
});