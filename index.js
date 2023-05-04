const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require("./models/Song")
// Define associations here

Band.hasOne(Musician);
Musician.belongsTo(Band);

module.exports = {
    Band,
    Musician,
    Song
};
