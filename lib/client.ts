import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      // uri: "http://localhost:3000/api/graphql", // development
      uri: `https://${process.env.NEXT_PUBLIC_SUPABASE_REF}.supabase.co/graphql/v1`,
      headers: {
        apiKey: process.env.NEXT_PUBLIC_API_KEY as string,
      }, //production
    }),
  });
});