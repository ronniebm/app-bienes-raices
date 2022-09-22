import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js";

// Creating the express app.
const app = express();

// settings to enable PUG
app.set('view engine', 'pug')

// Routing
app.use('/auth', usuarioRoutes)

// Defining app port, and starting app.
const port = 3000;

app.listen(port, () => {
  console.log(`== Server is running on port ${port} ==`);
});
