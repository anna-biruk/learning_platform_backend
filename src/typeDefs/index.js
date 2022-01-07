import { gql } from "apollo-server";
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    id: ID
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books(title: String, author: String): [Book]
  }

  input BookInput {
    title: String
    author: String
  }
  type Mutation {
    createBook(title: String, author: String): Book
    updateBookItem(id: ID!, book: BookInput!): Book
  }
`;

export default typeDefs;
