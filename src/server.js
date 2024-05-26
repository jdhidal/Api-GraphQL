import { GraphQLServer } from "graphql-yoga";
import { typeDefs } from "./graphql/typeDefs";
import { resolvers } from "./graphql/resolvers";

const server = new GraphQLServer({
  resolvers,
  typeDefs
});

const PORT = process.env.PORT || 3000;

server.start({ PORT }, ({ PORT }) => {
  console.log("Server on port", PORT);
});
