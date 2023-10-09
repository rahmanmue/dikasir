import { ApolloClient, InMemoryCache } from "@apollo/client";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const httpLink = new HttpLink({
  uri: "https://giving-hog-57.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "eK2kli0xkPqVivGG0eY1Rdt2dwKB0zTgikE8aei2gPFfEVDii4L1k01o0K4BDI2W",
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://giving-hog-57.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "eK2kli0xkPqVivGG0eY1Rdt2dwKB0zTgikE8aei2gPFfEVDii4L1k01o0K4BDI2W",
      },
    },
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

// const client = new ApolloClient({
//   uri: "https://giving-hog-57.hasura.app/v1/graphql",
//   cache: new InMemoryCache(),
//   headers: {
//     "x-hasura-admin-secret":
//       "eK2kli0xkPqVivGG0eY1Rdt2dwKB0zTgikE8aei2gPFfEVDii4L1k01o0K4BDI2W",
//   },
// });

export default client;
