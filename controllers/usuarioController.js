
const formularioLogin = (req, res) => {
  res.render("auth/login", {
    autenticated: false,
  });
};

const formularioRegistro = (req, res) => {
    res.render("auth/registro", {
      pagina: "Crear Cuenta"
    });
  };

export { formularioLogin, formularioRegistro };