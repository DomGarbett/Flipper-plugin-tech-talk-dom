import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../Redux/store';
import { CharacterResponse } from '../types';

export const rickAndMortyService = createApi({
  reducerPath: 'rickApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api',
  }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<CharacterResponse, void>({
      query: () => '/character',
    }),
  }),
});

export const { useGetAllCharactersQuery } = rickAndMortyService;
