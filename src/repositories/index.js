import BooksModel from "../database/book.model.js";

class BooksRepository {
  async getAllBooks(filter, limit = 10, offset = 0) {
    const books = await BooksModel.find(filter)
      .skip(offset)
      .limit(limit)
      .lean()
      .exec();
    return books;
  }
  async createBook({ title, author }) {
    const book = await BooksModel.create({ title, author });
    return book;
  }
  async updateBookItem({ id, book }) {
    const updatedBook = await BooksModel.findByIdAndUpdate(id, book, {
      new: true,
    });
    return updatedBook;
  }
}

export default new BooksRepository();
