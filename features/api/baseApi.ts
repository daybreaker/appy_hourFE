import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Constants from 'expo-constants'

/**
 * Fallback declarations for values that were referenced but not defined in this file.
 * Adjust these to import the real implementations from your config/environment as needed.
 */
const getValueFor = async (_key: string): Promise<string | null> => null
const abbreviation = ''

// Safely read expoConfig
const expoConfig = (Constants.expoConfig ?? {}) as Record<string, any>
const { timeout, api } = expoConfig

export const baseApi = createApi({
  reducerPath: 'appyHour',
  baseQuery: fetchBaseQuery({
    baseUrl: api,
    timeout,
    prepareHeaders: async (headers) => {
      const session = await getValueFor('session')

      // If we have a token set in state, let's assume that we should be passing it.
      if (session) {
        headers.set('authorization', `Bearer ${session}`)
      }

      headers.set('Content-Type', 'application/json')
      headers.set('Accept', 'application/json')
      headers.set('Accept-Encoding', 'gzip')
      headers.set('tp-property-abbr', abbreviation)
      headers.set('X-Requested-With', 'XMLHttpRequest')
      return headers
    },
  }),
  // endpoints is required by createApi's TypeScript definition; provide an empty object if there are no endpoints here.
  endpoints: (builder) => ({}),
})