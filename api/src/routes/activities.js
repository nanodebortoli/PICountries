const { Router } = require('express');
const { Activity } = require('../db')


const router = Router();

router.post('/', async (req, res, next) => {
  const { name, length, difficulty, season, countries} = req.body;
  try{
    const act = await Activity.create({name, length, difficulty, season});
    countries.map(async (country) => await act.setCountries(country))
    return res.send('Actividad creada con exito');
  }
  catch(err){
    next(err);
  }
})

module.exports = router;