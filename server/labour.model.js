const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Labour = new Schema({
	lab_code: {
		type: String,
	},
	lab_service: {
		type: String,
	},
	lab_quantity: {
		type: String,
	},
	lab_unit: {
		type: String
	},
	lab_rate: {
		type: String,
	},
	lab_labourer: {
		type: String
	},
	lab_location: {
		type: String
	},
	lab_address: {
		type: String
	},
	lab_contact: {
		type: String
	},
	lab_date: {
		type: String
	},
});

module.exports = mongoose.model("Labour", Labour);
