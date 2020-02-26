var db = require("../db/db");

exports.get = () => {
  return db.get("users").find().value();
}

exports.post = (...args) => {
  db.get("users")
    .push({
      id: args.id,
      email: args.email,
      password: args.password,
      confirmPassword: args.confirmPassword
    })
    .write();

    return "Cadastrado com sucesso!";
}
