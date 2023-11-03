import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";

import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import ObtenerListaContactos from "./Rutas/listaContactos.ts";
import crearContacto from "./Rutas/crearContacto.ts";
import ActualizarContacto from "./Rutas/actualizarContacto.ts";
import borrarContacto from "./Rutas/borrarContacto.ts";
import ObtenerContacto from "./Rutas/ObtenerContactoDNI.ts";

try {
await mongoose.connect("mongodb+srv://Marcos:12345@nebrija-cluster.7yxmiyx.mongodb.net/ContactosDB?retryWrites=true&w=majority");
console.info("Conexion con Mongo realizada")
const app = express();
app.use(express.json());
app
  .get("/api/contactos", ObtenerListaContactos)
  .get("/api/contactos/:dni", ObtenerContacto)
  .post("/api/contactos", crearContacto)
  .put("/api/contactos/:dni", ActualizarContacto)
  .delete("/api/contactos/:dni", borrarContacto);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
} catch (e) {
   console.error(e);
}



