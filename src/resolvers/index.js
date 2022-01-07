import booksService from "../services/index.js";

const resolvers = {
  Query: {
    books: async (parent, args) => {
      const { title, author } = args;

      const filter = {};
      if (title && author) {
        filter.$or = [{ title }, { author }];
      } else if (title) {
        filter.title = title;
      } else if (author) {
        filter.author = author;
      }
      const books = await booksService.getAllBooks(filter, 10, 0);
      return books;
    },
  },
  Mutation: {
    createBook: async (parent, { title, author }) => {
      const book = await booksService.createBook({ title, author });
      return book;
    },
    updateBookItem: async (parent, { id, book }) => {
      const updatedBook = await booksService.updateBookItem({ id, book });
      return updatedBook;
    },
  },
};

export default resolvers;
