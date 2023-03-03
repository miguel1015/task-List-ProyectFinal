const express = require("express");
const user = express.Router();
const Users = require("../models/usuario");
const jwt = require("jsonwebtoken");
user.post("/agregar", async(req, res) => {
  const { body } = req;
  const { email } = body;
  if (!email)
    return res
      .status(404)
      .json({ msg: "se requiere email para esta peticion" });
  try {
    const alreadyUser = await Users.findOne({
        email: email,
    });
    if (alreadyUser)
      return res
        .status(404)
        .json({ msg: "ya existe un usuario con ese email" });
    const users =  Users(body);
    await users.save();
    res.json({msg: "Usuario creado exitosamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "hable con el admin" });
  }
});
user.patch("/", async (req, res) => {
  const { body } = req;
  const { email, password } = body;
  if (!email || !password)
    return res
      .status(404)
      .json({ msg: "se requiere email y contraseña para esta peticion" });
  try {
    const usuario = await Users.findOne({
      email: email,
    });
    if (!usuario)
      return res
        .status(404)
        .json({ msg: "Usuario no registrado", usuario: null });
    if (password !== usuario.password)
      return res.json({ msg: "contraseña erronea", usuario: null });
    const token = jwt.sign({ usuario }, "12345678", { expiresIn: 60 * 60 });
    res.json({ usuario, msg: "sign in", token });
  } catch (error) {
    res.status(500).json({ msg: "hable con el admin" });
  }
});
module.exports = user;