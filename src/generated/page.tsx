import * as Types from './graphql';

import * as Operations from './graphql';
import { NextRouter, useRouter } from 'next/router';
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient } from '../lib/apolloClient';
export async function getServerPageGetAllCourses(
  options: Omit<
    Apollo.QueryOptions<Types.GetAllCoursesQueryVariables>,
    'query'
  >,
  ctx?: any,
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetAllCoursesQuery>({
    ...options,
    query: Operations.GetAllCoursesDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageGetAllCoursesComp = React.FC<{
  data?: Types.GetAllCoursesQuery;
  error?: Apollo.ApolloError;
}>;
export const ssrGetAllCourses = {
  getServerPage: getServerPageGetAllCourses,
};
