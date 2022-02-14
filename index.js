import 'dotenv/config';
import {ApolloServer} from "apollo-server-express";
import {ApolloServerPluginDrainHttpServer} from 'apollo-server-core';
import http from 'http';
import resolvers from "./src/resolvers/resolver.js";
import typeDefs from "./src/typeDefs/typedefs.js";
import "./src/database/index.js";
import express from "express";
import router from "./src/auth/index.js";


const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
    typeDefs, resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
});
await server.start()
server.applyMiddleware({app});

app.use(router)

httpServer.listen({port: process.env.PORT || 4000}, () => {
    console.log(`🚀  Server ready http://localhost:${process.env.PORT || 4000}${server.graphqlPath}`);
});
