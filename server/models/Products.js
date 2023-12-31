import mongoose from 'mongoose';

/**
 * The ProductSchema defines the shape of the products that will be stored in the database.
 */
const ProductSchema = new mongoose.Schema({
	productID: {
		type: Number,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	brand: {
		type: String,
		required: true,
	},
	ean: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
	currentPrice: {
		type: Number,
		required: true,
	},
	weight: {
		type: Number,
		required: false,
	},
	weightUnit: {
		type: String,
		required: false,
	},
	store: {
		type: String,
		required: true,
	},
});

const ProductModel = mongoose.model('products', ProductSchema);
export default ProductModel;
