if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const plantRoutes = express.Router();
const materialsRoutes = express.Router();
const labourRoutes = express.Router();
const path = require('path');
const userRoutes = require("./server/userRoutes");

const PORT = process.env.PORT || 4000;

// const port = 4000;

// "mongodb://127.0.0.1:27017/plants"

// @cluster0.fbna3.mongodb.net/plants


mongoose.connect("mongodb+srv://admin-Kilpatrick:191986Kil@cluster0.fbna3.mongodb.net/plants", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
const connection = mongoose.connection;

connection.once("open", function () {
	console.log("MongoDB database connection established successfully");
});


//////////////////// --PLANTS-- /////////////////////////////

let Plant = require("./server/plant.model");
const { db } = require("./server/plant.model");

app.use(cors());
app.use(bodyParser.json());

plantRoutes.route("/").get(function (req, res) {
	Plant.find({}, function (err, plants) {
		if (err) {
			console.log(err);
		} else {
			res.json(plants);
		}
	});
});

plantRoutes.route("/:id").get(function (req, res) {
	let id = req.params.id;
	Plant.findById(id, function (err, plant) {
		res.json(plant);
	});
});

plantRoutes.route("/add").post(function (req, res) {
	let plant = new Plant(req.body);
	plant
		.save()
		.then((plant) => {
			res.status(200).json({ plant: "plant added successfully" });
		})
		.catch((err) => {
			res.status(400).send("adding new plant failed");
		});
});

plantRoutes.route("/update/:id").post(function (req, res) {
	Plant.findById(req.params.id, function (err, plant) {
		if (!plant) res.status(404).send("data is not found");
		else plant.plant_code = req.body.plant_code;
		plant.plant_description = req.body.plant_description;
		plant.plant_quantity = req.body.plant_quantity;
		plant.plant_unit = req.body.plant_unit;
		plant.plant_rate = req.body.plant_rate;
		plant.plant_renter = req.body.plant_renter;
		plant.plant_location = req.body.plant_location;
		plant.plant_address = req.body.plant_address;
		plant.plant_contact = req.body.plant_contact;
		plant.plant_date = req.body.plant_date;

		plant
			.save()
			.then((plant) => {
				res.json("Plant updated!");
			})
			.catch((err) => {
				res.status(400).send("Update not possible");
			});
	});
});

//Delete a plant item
plantRoutes.route("/delete/:id").get(function (req, res) {
	Plant.findByIdAndRemove(
		{
			_id: req.params.id,
		},
		function (err, plant) {
			if (err) res.json(err);
			else res.json("Plant item deleted Successfully");
		}
	);
});

//////////////////// --MATERIALS-- /////////////////////////////

let Material = require("./server/material.model");

app.use(cors());
app.use(bodyParser.json());

materialsRoutes.route("/").get(function (req, res) {
	Material.find({}, function (err, materials) {
		if (err) {
			console.log(err);
		} else {
			res.json(materials);
		}
	});
});

materialsRoutes.route("/:id").get(function (req, res) {
	let id = req.params.id;
	Material.findById(id, function (err, material) {
		res.json(material);
	});
});

materialsRoutes.route("/add").post(function (req, res) {
	let material = new Material(req.body);
	material
		.save()
		.then((material) => {
			res.status(200).json({ material: "material added successfully" });
		})
		.catch((err) => {
			res.status(400).send("adding new material failed");
		});
});

materialsRoutes.route("/update/:id").post(function (req, res) {
	Material.findById(req.params.id, function (err, material) {
		if (!material) res.status(404).send("data is not found");
		else material.mat_code = req.body.mat_code;
		material.mat_description = req.body.mat_description;
		material.mat_quantity = req.body.mat_quantity;
		material.mat_unit = req.body.mat_unit;
		material.mat_price = req.body.mat_price;
		material.mat_supplier = req.body.mat_supplier;
		material.mat_location = req.body.mat_location;
		material.mat_address = req.body.mat_address;
		material.mat_contact = req.body.mat_contact;
		material.mat_date = req.body.mat_date;

		material
			.save()
			.then((material) => {
				res.json("Material updated!");
			})
			.catch((err) => {
				res.status(400).send("Update not possible");
			});
	});
});

//Delete a material item
materialsRoutes.route("/delete/:id").get(function (req, res) {
	Material.findByIdAndRemove(
		{
			_id: req.params.id,
		},
		function (err, material) {
			if (err) res.json(err);
			else res.json("Material item deleted Successfully");
		}
	);
});

//////////////////// --LABOUR-- /////////////////////////////

let Labour = require("./server/labour.model");

app.use(cors());
app.use(bodyParser.json());

labourRoutes.route("/").get(function (req, res) {
	Labour.find({}, function (err, labours) {
		if (err) {
			console.log(err);
		} else {
			res.json(labours);
		}
	});
});

labourRoutes.route("/:id").get(function (req, res) {
	let id = req.params.id;
	Labour.findById(id, function (err, labour) {
		res.json(labour);
	});
});

labourRoutes.route("/add").post(function (req, res) {
	let labour = new Labour(req.body);
	labour
		.save()
		.then((labour) => {
			res.status(200).json({ labour: "labour added successfully" });
		})
		.catch((err) => {
			res.status(400).send("adding new labour failed");
		});
});

labourRoutes.route("/update/:id").post(function (req, res) {
	Labour.findById(req.params.id, function (err, labour) {
		if (!labour) res.status(404).send("data is not found");
		else labour.lab_code = req.body.lab_code;
		labour.lab_service = req.body.lab_service;
		labour.lab_quantity = req.body.lab_quantity;
		labour.lab_unit = req.body.lab_unit;
		labour.lab_rate = req.body.lab_rate;
		labour.lab_labourer = req.body.lab_labourer;
		labour.lab_location = req.body.lab_location;
		labour.lab_address = req.body.lab_address;
		labour.lab_contact = req.body.lab_contact;
		labour.lab_date = req.body.lab_date;

		labour
			.save()
			.then((labour) => {
				res.json("Labour updated!");
			})
			.catch((err) => {
				res.status(400).send("Update not possible");
			});
	});
});

//Delete a material item
labourRoutes.route("/delete/:id").get(function (req, res) {
	Labour.findByIdAndRemove(
		{
			_id: req.params.id,
		},
		function (err, labour) {
			if (err) res.json(err);
			else res.json("Labour item deleted Successfully");
		}
	);
});

//////////////////// --LOGIN AUTHENTICATION-- /////////////////////////////

app.use(express.json());
// here we want express to use userRoutes for all requests coming at /auth like /auth/login and /auth/signup



app.use("/auth", userRoutes);

app.use("/labour", labourRoutes);					

app.use("/materials", materialsRoutes);			

app.use("/plants", plantRoutes);

app.listen(PORT, function () {
	console.log("Server is running on Port: " + PORT);
});


