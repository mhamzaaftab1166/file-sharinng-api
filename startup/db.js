import mongoose from "mongoose";
const options = {
  family: 4, // Use IPv4, skip trying IPv6
};

export default function initializeDB() {
  mongoose
    .connect("mongodb://localhost/shareit", options)
    .then(() => console.log("connected to MongoDB"))
    .catch((err) => console.log("could not connect to MongoDB", err.message));
}
