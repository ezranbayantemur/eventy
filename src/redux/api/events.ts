import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {Event} from '@types';

export const eventsApi = createApi({
  reducerPath: 'eventsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://openapi.izmir.bel.tr/api/ibb',
  }),
  endpoints: builder => ({
    getEvents: builder.query<Event[], string>({
      query: () => '/kultursanat/etkinlikler',
    }),
  }),
});

export const {useGetEventsQuery} = eventsApi;
