import {gql} from "apollo-server";

const typeDefs = gql`
    # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

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
        fullDescription:String
        price: Float
        sellPrice: Float
        questions: [Question]
        technologies: [String]
        rating: Int
        language: String
        imageUrl: String
    }

    type User {
        providerId: String,
        displayName: String,
        provider: String,
        picture: String,
        locale: String,
    }

    # The "Query" type is special: it lists all of the available queries that
    # clients can execute, along with the return type for each. In this
    # case, the "books" query returns an array of zero or more Books (defined above).
    type Query {
        courses(searchString: String, language:String): [Course]
        courseById(id: ID):Course
        users: [User]
    }
`;

export default typeDefs;
