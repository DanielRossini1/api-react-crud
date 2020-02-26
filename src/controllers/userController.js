var user = require("../models/user");

exports.showAll = (req, res) => {
  res.send(user.get());
}

exports.insert = (req, res) => {
  user.post({ 
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword
  });

  res.send({ 
    message: "Inserido com sucesso",  
    user: user.get()
  })
}