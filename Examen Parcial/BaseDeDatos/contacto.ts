import mongoose from "npm:mongoose@7.6.3";
import { Contacto } from "../tipos.ts";

const Schema = mongoose.Schema;

const ContactoSchema = new Schema(
  {
    dni: { type: String, required: true, unique: true },
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    email: { type: String, required: true },
    codigoPostal: { type: String, required: true },
    codigoISO: {type:String, required:true}
  },

  { timestamps: true }
);

export type ContactoModelType = mongoose.Document & Omit<Contacto, "id">;

export default mongoose.model<ContactoModelType>("Contacto", ContactoSchema);
