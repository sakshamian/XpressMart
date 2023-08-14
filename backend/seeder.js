import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Order from './models/orderModel.js';
import Product from './models/productModel.js';
//import connectDB from './config/db.js';

dotenv.config();
const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://sakshamian:xpressmartapp@cluster0.oxqdwjh.mongodb.net/',  {

      useNewUrlParser: "true",
      useUnifiedTopology: "true"
    
    });
    console.log(`mongoDB connected ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map(product => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log('data imported!');
  } catch (error) {
    console.error(`${error}`);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('data imported!');
  } catch (error) {
    console.error(`${error}`);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
