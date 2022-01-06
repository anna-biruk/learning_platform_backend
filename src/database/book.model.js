import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
  title: String,
  author: String,
});

const BooksModel = mongoose.model("BooksModel", booksSchema, "Books");

export default BooksModel;
