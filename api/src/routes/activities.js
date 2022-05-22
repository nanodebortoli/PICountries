const { Router } = require('express');
const { Country, Activity, CountriesActivities } = require('../db')

const router = Router();

router.get('/', (req, res, next) => {
  try{
    Activity.findAll().then(act => {return res.json(act)});
  } 
  catch(err){
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  const { name, lengthD, difficulty, season, countries} = req.body;

  try{
    let activityList = await Activity.findAll({where: {name: name}})
    if(activityList.length){
      let getId = await CountriesActivities.findAll({where: {"activityId": activityList[0].id}})
      const prevCountries = getId.map(act => act.countryId);
      var allCountries = [...prevCountries, ...countries];
      await CountriesActivities.destroy({where: {"activityId": activityList[0].id}})
    }
    else allCountries = countries;
    let activity = await Activity.findOrCreate({where: {name: name}, defaults: {name, lengthD, difficulty, season}});
    allCountries.map(async (countryId) => {
      const country = await Country.findByPk(countryId);
      await activity[0].setCountries(country)
    })
    return res.send(activity[0]);
  }

  catch(err){
    next(err);
  }
});

module.exports = router;