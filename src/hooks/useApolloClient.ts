import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

// milo gateway api
const miloGatewayLink = new HttpLink({
  uri: 'https://milo-web.vercel.app/api/graphql',
  // uri: 'http://localhost:3000/api/graphql',
  credentials: 'include',
});

let apolloClient;
const cache = new InMemoryCache();

function createApolloClient() {
  return new ApolloClient({
    link: miloGatewayLink,
    ssrMode: typeof window === 'undefined',
    cache,
    name: 'milo_web_client',
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
