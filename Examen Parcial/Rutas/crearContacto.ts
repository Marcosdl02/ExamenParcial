import { Request, Response } from "npm:express@4.18.2";
import ContactoModel from "../BaseDeDatos/contacto.ts";

const crearContacto = async (req: Request, res: Response) => {
  try {
    const { dni,nombre,apellidos,email,codigoPostal,codigoISO } = req.body;
    if (!dni||!nombre||!apellidos||!email||!codigoPostal ||!codigoISO) {
      res.status(500).send("Faltan datos poor introducir");
      return;
    }

    const yaExiste = await ContactoModel.findOne({ dni }).exec();
    if (yaExiste) {
      res.status(400).send("Ya existe el contacto");
      return;
    }

    const newContacto = new ContactoModel({dni,nombre,apellidos,email,codigoPostal, codigoISO});
    await newContacto.save();

    res.status(200).send({
        dni: newContacto.dni,
        nombre: newContacto.nombre,
        apellidos: newContacto.apellidos,
        email: newContacto.email,
        codigoPostal: newContacto.codigoPostal,
        codigoISO: newContacto.codigoISO,
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default crearContacto;