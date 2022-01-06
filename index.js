import { ApolloServer } from "apollo-server";
import resolvers from "./src/resolvers/index.js";
import typeDefs from "./src/typeDefs/index.js";
import "./src/database/index.js";

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
