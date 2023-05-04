const { db } = require("./db");

const { Band, Musician, Song } = require("./index");

describe("Band, Musician, and Song Models", () => {
	/**
	 * Runs the code prior to all tests
	 */
	beforeAll(async () => {
		// the 'sync' method will create tables based on the model class
		// by setting 'force:true' the tables are recreated each time the
		// test suite is run
		await db.sync({ force: true });

		// await db.sync();
	});

	test("can create a Band", async () => {
		// TODO - test creating a band
		const testBand = await Band.create({
			name: "Backstreet boys",
			genre: "Pop",
		});
		expect(testBand.name).toBe("Backstreet boys");
	});

	test("can create a Musician", async () => {
		// TODO - test creating a musician

		const testMusician = await Musician.create({
			name: "Justin Timberlake",
			instrument: "Guitar",
		});
		expect(testMusician.name).toBe("Justin Timberlake");
	});

	test("can update a Band", async () => {
		// TODO - test updating a band
		let updatedBand = await Band.findByPk(1);
		const newBand = await updatedBand.update({
			name: "Spice Girls",
		});
		expect(newBand.name).toBe("Spice Girls");
	});

	test("can update a Musician", async () => {
		// TODO - test updating a musician
		let updatedMusician = await Musician.findByPk(1);
		const newMusician = await updatedMusician.update({
			name: "Britney Spears",
		});
		expect(newMusician.name).toBe("Britney Spears");
	});

	test("can delete a Band", async () => {
		// TODO - test deleting a band
		let findBand = await Band.findByPk(1);
		let deleteBand = await findBand.destroy();
		let emptyBand = await Band.findByPk(1);
		expect(emptyBand).toBe(null);
	});

	test("can delete a Musician", async () => {
		// TODO - test deleting a musician

		let findMusician = await Musician.findByPk(1);
		let deleteMusician = await findMusician.destroy();
		let emptyMusician = await Musician.findByPk(1);
		expect(emptyMusician).toBe(null);
	});

	test("can create a Song", async () => {
		const createSong = await Song.create({
			title: "As Long as You Love Me",
			year: 1996,
			length: 3,
		});
		const findCreated = await Song.findOne(
			{ where: { title: "As Long as You Love Me" } } // find the created song in db
		); // and
		expect(createSong.toJSON()).toEqual(findCreated.toJSON()); // compare it with the return value from create query
	});

	test("can update a Song", async () => {
		const updateSong = await Song.update(
			{ title: "I Want It That Way", year: 1999 },
			{ where: { length: 3 } }
		);
		expect(updateSong).toBeTruthy(); // update query should return a boolean 1 if succes

		const findCreated = await Song.findOne(
			{ where: { title: "I Want It That Way" } } // find the song again if it is updated in the db
		); // and
		expect(findCreated.title).toBe("I Want It That Way"); // compare it manually with the input values
		expect(findCreated.year).toBe(1999);
		expect(findCreated.length).toBe(3);
	});

	test("can delete a Song", async () => {
		const deleteSong = await Song.destroy({
			where: { title: "I Want It That Way" },
		});
		expect(deleteSong).toBeTruthy(); // the delete query should return a boolean value 1 for success
		const findDeleted = await Song.findOne(
			{ where: { title: "I Want It That Way" } } // find the song again if that still exist after deleting and it should return null
		);
		expect(findDeleted).toBe(null);
	});
});
