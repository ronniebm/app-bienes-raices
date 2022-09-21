import express from "express";

const router = express.Router();

// Defining router
router.get("/", function (req, res) {
  res.json({ msg: "Hola mundo desde Express" });
});

router.post("/nosotros", function (req, res) {
  res.json({ msg: "Respuesta de tipo POST" });
});

export default router;
