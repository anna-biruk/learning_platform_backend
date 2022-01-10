import { gql } from "apollo-server";
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.

  type Question {
    id: ID
    question: String
    answer: String
    category: String
    media: [String]
    references: [String]
  }

  type Course {
    id: ID
    title: String
    description: String
    price: Float
    sellPrice: Float
    questions: [Question]
    technologies: [String]
    rating: Int
    imageUrl: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    courses(title: String, id: ID): [Course]
  }
`;

export default typeDefs;