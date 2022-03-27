import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

export const getApolloClient = (
  _: unknown,
  initialState?: NormalizedCacheObject,
) => {
  const httpLink = createHttpLink({
    uri: process.env.CONTENTFUL_GRAPHQL_URL,
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_GRAPHQL_CONTENT_TOKEN}`,
    },
  });
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache().restore(initialState || {}),
    ssrMode: !process.browser,
    assumeImmutableResults: true,
  });
};
