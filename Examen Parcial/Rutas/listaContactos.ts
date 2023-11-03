import { Request, Response } from "npm:express@4.18.2";
import  ContactoModel  from "../BaseDeDatos/contacto.ts";

const ObtenerListaContactos = async (_req: Request, res: Response) => {
    try {
      const contactos = await ContactoModel.find().exec();
      if (contactos.length==0) {
        res.status(404).send("No existen contactos en la lista");
        return;
      }
      const ContactosExistentes = contactos.map(contacto => ({
        nombre: contacto.nombre,
        dni: contacto.dni,
      }));
  
      res.status(200).json(ContactosExistentes);
    } catch (error) {
      res.status(404).send(error.message);
      return;
    }
  };

  export default ObtenerListaContactos;