import { Request, Response } from "npm:express@4.18.2";
import ContactoModel from "../BaseDeDatos/contacto.ts";

const ActualizarContacto = async (req: Request, res: Response) => {
  try {
    const { dni } = req.params;
    const { nombre,apellidos,email,codigoPostal, codigoISO } = req.body;
    if (!nombre||!apellidos||!email||!codigoPostal ||!codigoISO) {
      res.status(500).send("Faltan datos");
      return;
    }

    const ContactoActualizado = await ContactoModel.findOneAndUpdate(
      { dni },
      { nombre,apellidos,email,codigoPostal,codigoISO },
      { new: true }
    ).exec();

    if (!ContactoActualizado) {
      res.status(404).send("Contacto no encontrado");
      return;
    }

    res.status(200).send({
        dni: ContactoActualizado.dni,
        nombre: ContactoActualizado.nombre,
        apellidos: ContactoActualizado.apellidos,
        email: ContactoActualizado.email,
        codigoPostal: ContactoActualizado.codigoPostal,
        codigoISO : ContactoActualizado.codigoISO,
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default ActualizarContacto;