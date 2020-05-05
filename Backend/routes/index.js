var path = require("path")
const router = require("express").Router();
const apiRoutes = require("./api")
const nodemailer = require('nodemailer');
const creds = require('../controllers/emailConfig');

const transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    let package = req.body.package
    const message = req.body.message
    const content = `name: ${name} \n email: ${email} \n package: ${package} \n message: ${message} `
  
    const mail = {
      from: name,
      to: 'santasitetester@gmail.com',
      subject: "New Message from Santa Paul's Workshop",
      text: content
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  })

router.use("/api", apiRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });

module.exports = router;