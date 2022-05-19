const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('activity', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING
    },
    difficulty: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5
      }
    },
    lengthD: {
      type: DataTypes.INTEGER
    },
    season: {
      type: DataTypes.STRING,
      validate: {
        isIn: [['Summer', 'Fall', 'Spring', 'Winter']]
      }
    }
  }, {timestamps: false})
};
