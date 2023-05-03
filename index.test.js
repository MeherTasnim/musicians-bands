const { sequelize, db } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const testBand = await Band.create({
            name: 'Backstreet boys',
            genre: 'Pop'
        });
        expect(testBand.name).toBe('Backstreet boys');
    });

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const testMusician = await Musician.create({
            name: 'Justin Timberlake',
            genre: 'Pop'

        });
        expect(testMusician.name).toBe('Justin Timberlake');
    });

    test('can update a Band', async () => {
        // TODO - test updating a band
        let updatedBand = await Band.findByPk(1);
        const newBand = await updatedBand.update({
            name: 'Spice Girls'
        });
        expect(newBand.name).toBe('Spice Girls');
    });

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        let updatedMusician = await Musician.findByPk(1);
        const newMusician =await updatedMusician.update({
            name: 'Britney Spears'
        });
        expect(newMusician.name).toBe('Oops I did it again');
    })

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        let findBand = await Band.findByPk(1);
        let deleteBand = await findBand.destroy();
        let emptyBand = await Band.findByPk(1);
        expect(emptyBand).toBe(null);
    });

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        let deleteMusician = await Musician.destroy({ where: {name: 'Justine Timberlake'}});
        expect(deleteMusician).toBe({});
    })
})