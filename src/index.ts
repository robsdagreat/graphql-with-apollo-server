
import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from '@apollo/server/standalone'
import { readFileSync } from "fs";
import path from "path";
import {gql} from 'graphql-tag'
import {resolvers} from './resolvers'
import { ListingApi } from "./dataSources/listing-api";

    
const typeDefs = gql(
    readFileSync(path.resolve(__dirname, "./schema.graphql"), {
        encoding: "utf-8"
    })
);

const startApolloSever = async ()=>{
 const server = new ApolloServer({typeDefs,
    resolvers,
 });
 const {url} = await startStandaloneServer(server,{
    context: async()=> {
        const {cache} = server;
       return{
         dataSources: {
         listingApi: new ListingApi({cache}),
        },
    };
},
 });
 console.log(`
    🚀 Server is running!
    📭 Query at ${url}
    `);
}

startApolloSever();

