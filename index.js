import {ApolloServer} from "apollo-server-express";
import {ApolloServerPluginDrainHttpServer} from 'apollo-server-core';
import http from 'http';
import resolvers from "./src/resolvers/courses.resolver.js";
import typeDefs from "./src/typeDefs/courses.typedefs.js";
import "./src/database/index.js";
import express from "express";
import router from "./src/auth/index.js";


const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
    typeDefs, resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
});
const result = await server.start()
console.log({result})
server.applyMiddleware({app});

app.use(router)

httpServer.listen({port: 4000}, () => {
    console.log(`🚀  Server ready http://localhost:4000${server.graphqlPath}`);
});
