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
}

export default new BooksRepository();
