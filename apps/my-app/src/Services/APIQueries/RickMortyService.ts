import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Character, CharacterResponse } from '../types';


export const rickAndMortyService = createApi({
  reducerPath: 'rickApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api',
  }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<CharacterResponse, void>({
      query: () => '/character',
    }),
    getCharacterById: builder.query<Character, string>({
      query: (id) => `character/${id}`,
    }),

  }),
});

export const { useGetAllCharactersQuery, useGetCharacterByIdQuery } =
  rickAndMortyService;

