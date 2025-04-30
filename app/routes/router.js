const express = require("express");
const router = express.Router();


router.get('/', (req, res) => {
    res.render('pages/index', { resultado: null });
  });
  
  router.post('/verificar', (req, res) => {
    const lado1 = parseFloat(req.body.lado1);
    const lado2 = parseFloat(req.body.lado2);
    const lado3 = parseFloat(req.body.lado3);
  
    let resultado = '';
  
    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
      resultado = "Por favor, insira valores válidos.";
    } else if (
      lado1 < lado2 + lado3 &&
      lado2 < lado1 + lado3 &&
      lado3 < lado1 + lado2
    ) 
      {
      if (lado1 === lado2 && lado2 === lado3) {
        resultado = "Triângulo Equilátero.";
      } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        resultado = "Triângulo Isósceles.";
      } else {
        resultado = "Triângulo Escaleno.";
      }
      } else {
      resultado = "Medidas não formam um triângulo.";
    }
  
    res.render('pages/index', { resultado });
  });
  
  module.exports = router