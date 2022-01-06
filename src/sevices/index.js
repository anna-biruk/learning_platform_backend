import booksRepository from "../repositories/index.js";

class BooksService {
  async getAllBooks(filter, limit, offset) {
    const books = await booksRepository.getAllBooks(filter,limit, offset);
    return books;
  }
}

export default new BooksService();
