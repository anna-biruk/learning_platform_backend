import {gql} from "apollo-server";

const typeDefs = gql`
    # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
    scalar Date
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
        displayName: String,
        provider: String,
        picture: String,
        locale: String,
    }
    enum ScheduleStatus{
        free
        booked
    }
    type ScheduleItem{
        from:Date,
        to:Date,
        status:ScheduleStatus
    }
    type Interview{
        name: String,
        description: String,
        jobTitle: String,
        price: Float,
        sellPrice: Float,
        technologies: [String],
        schedule: [ScheduleItem],
        linkedinUrl: String,
        imageUrl: String,
        isDisabled: Boolean
    }

    # The "Query" type is special: it lists all of the available queries that
    # clients can execute, along with the return type for each. In this
    # case, the "books" query returns an array of zero or more Books (defined above).
    type Query {
        courses(searchString: String, language:String): [Course]
        courseById(id: ID):Course
        users: [User]
        interviews:[Interview]
        me(token:String):User
    }
`;

export default typeDefs;
