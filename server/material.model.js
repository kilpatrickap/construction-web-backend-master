const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Material = new Schema({
	mat_code: {
		type: String,
	},
	mat_description: {
		type: String,
	},
	mat_quantity: {
		type: String,
	},
	mat_unit: {
		type: String
	},
	mat_price: {
		type: String,
	},
	mat_supplier: {
		type: String
	},
	mat_location: {
		type: String
	},
	mat_address: {
		type: String
	},
	mat_contact: {
		type: String
	},
	mat_date: {
		type: String
	},
});

module.exports = mongoose.model("Material", Material);
