import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl6cm3csy1ar701uk652d8dc0/master",
  cache: new InMemoryCache(),
});
