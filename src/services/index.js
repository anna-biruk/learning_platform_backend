import booksRepository from "../repositories/index.js";

class BooksService {
  async getAllBooks(filter, limit, offset) {
    const books = await booksRepository.getAllBooks(filter, limit, offset);
    const result = books.map((item) => {
      return {
        id: item._id,
        title: item.title,
        author: item.author,
      };
    });
    return result;
  }
  async createBook({ title, author }) {
    const book = await booksRepository.createBook({ title, author });
    return book;
  }
  async updateBookItem({ id, book }) {
    const updatedBook = await booksRepository.updateBookItem({ id, book });
    return updatedBook;
  }
}

export default new BooksService();
