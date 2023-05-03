const {Sequelize, db,DataTypes,Model} = require('../db');


// TODO - define the Musician model
class Musician extends Model{ }

Musician.init(

{
name:DataTypes.STRING,
genre:DataTypes.STRING

  },

  {
    sequelize: db, 
    modelName: "Musician"
  }

)


module.exports = {
    Musician
};