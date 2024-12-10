const express = require('express');
const cors = require('cors');
const axios = require('axios');


const app = express();
app.use(cors());

app.get('/proxy', async (req, res) => {
    try {
      const { numeroRuc } = req.query;
      const response = await axios.get('https://srienlinea.sri.gob.ec/sri-catastro-sujeto-servicio-internet/rest/ConsolidadoContribuyente/existePorNumeroRuc', {
        params: { numeroRuc },
      });
      res.json(response.data);
    } catch (error) {
      res.json({error_message:error});
    }
  });
  
  app.listen(3000, () => console.log('Proxy running on port 3000'));