const path = require('path');
const { Sequelize, DataTypes, Model } = require('sequelize');


// TODO - create the new sequelize connection
const db = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'db.sqlite'),
    logging: false
});

console.log(db);
module.exports = {
    db,
    Sequelize,
    DataTypes,
    Model
};
