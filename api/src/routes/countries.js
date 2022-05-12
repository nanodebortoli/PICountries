const { Router } = require('express');
const { Country, Activity } = require('../db');
const { Op } = require('sequelize');
const axios = require('axios');
const router = Router();


router.get('/', async (req, res, next) => {
  const { name } = req.query;
  try{
    let data = await axios.get('https://restcountries.com/v3/all');
    let countryList = [];
    data.data.map(async country => {
      let obj = {
        id: country.cca3,
        name: country.name.common,
        flag: country.flags[1],
        continent: country.continents[0],
        capitalCity: '',
        subregion: country.subregion,
        area: country.area,
        population: country.population
      }
      country.capital ? obj.capitalCity = country.capital[0] : null;
      countryList.push(obj)
      try{
        await Country.findOrCreate({where: {id: obj.id}, defaults: obj})
      } 
      catch(err){
        next(err)
      }
    })
    if(!name) res.send(countryList);
    else Country.findAll({where: {name: {[Op.iLike]: '%' + name + '%'}}}).then(country =>{
      if(country.length === 0) return res.status(400).send('El pais ingresado no existe');
      return res.json(country)})
      
  }
  catch(err){
    next(err)  
  }
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Country.findByPk(id.toUpperCase(), {include: Activity})
  .then((country) => {
    if(!country) return res.status(404).send(`El código ${id.toUpperCase()} no corresponde a un pais existente`);
    return res.json(country);
  })
  .catch((err) => next(err))
})
module.exports = router;
