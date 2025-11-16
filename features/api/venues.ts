import { baseApi } from './baseApi'

export const venuesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getVenues: builder.query<any, void>({
      query: () => ({
        url: 'venues',
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetVenuesQuery } = venuesApi