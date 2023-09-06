"use client";
//https://www.apollographql.com/docs/react/data/error-handling/
//https://www.apollographql.com/blog/announcement/frontend/using-apollo-client-with-next-js-13-releasing-an-official-library-to-support-the-app-router/
import { ApolloLink, HttpLink, SuspenseCache } from "@apollo/client";
import {
  NextSSRApolloClient,
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(async ({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${await JSON.stringify(
          locations
        )}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

function makeClient() {
  const httpLink = new HttpLink({
    uri: "http://localhost:3000/api/graphql",
  });

  const link = ApolloLink.from([errorLink, httpLink]);

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
            errorLink,
          ])
        : link,
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}