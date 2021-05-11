const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Plant = new Schema({
	plant_code: {
		type: String,
	},
	plant_description: {
		type: String,
	},
	plant_quantity: {
		type: String,
	},
	plant_unit: {
		type: String
	},
	plant_rate: {
		type: String,
	},
	plant_renter: {
		type: String
	},
	plant_location: {
		type: String
	},
	plant_address: {
		type: String
	},
	plant_contact: {
		type: String
	},
	plant_date: {
		type: String
	},
});

module.exports = mongoose.model("Plant", Plant);
