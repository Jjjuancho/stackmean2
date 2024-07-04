// Extraer el objeto router, que permite ir delegando las peticiones
const router = require('express').Router();

// Requerir SOAP
const soap = require('soap');

// URL del WSDL de la API SOAP
const url = 'https://turnos.sanatorio-americano.com.ar/servlet/com.saamturnoonline.turnos';

// Parámetros de la función que deseas llamar
const args = { EmpresaCo: 1 };  // Aquí debes colocar el código de empresa que corresponda

// Función que se ejecuta cuando se recibe una petición GET sobre /
router.get('/', async (req, res) => {
  try {

    // Crear el cliente SOAP
    soap.createClient(url, (err, client) => {
      if (err) {
        console.error('Error al crear el cliente SOAP:', err);
        res.status(500).json({ error: `Error al crear el cliente SOAP: ${err}`});
        return;
      }

      // Llamar a la función del servicio web
      client.WSDevDis(args, (err, result) => {
        if (err) {
          console.error('Error al llamar a la función SOAP:', err);
          res.status(500).json({ error: 'Error al llamar a la función SOAP' });
          return;
        }

        // Procesar y devolver el resultado
        if (result && result.WSDevDisSDT) {
          const lugares = result.WSDevDisSDT.map(lugar => ({
            codigo: lugar.DistrCodi,
            descripcion: lugar.DistrDesc
          }));
          res.json({ lugares });
        } else {
          res.status(404).json({ message: 'No se encontraron lugares de atención.' });
        }
      });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Luego de configurar el objeto Router, lo exportamos
module.exports = router;
