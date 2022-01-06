import booksService from "../sevices/index.js";

const resolvers = {
  Query: {
    books: async (parent, args) => {
      const { title, author } = args;
      const books = await booksService.getAllBooks(
        { $or: [{ title }, { author }] },
        10,
        0
      );
      return books;
    },
  },
};

export default resolvers;
