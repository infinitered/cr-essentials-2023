/**
 * This module provides a client-side API for interacting with a server that provides information about dogs, and let
 * you favorite them.
 *
 * * See the Api Documentation for details:
 * [https://main--cr-essentials-2023.netlify.app/](https://main--cr-essentials-2023.netlify.app/)
 * @module api/dogs
 */
import { Dog, Favorites, PaginatedDogs } from './types'
import { USERNAME } from './config'

export const API_URL =
  'https://main--cr-essentials-2023.netlify.app/.netlify/functions'

export interface GetDogsParams {
  limit?: number
  page?: number
  searchString?: string
}

export class DogsApi {
  /**
   * Fetches a list of dogs from the server.

   * @param options - An object containing options for the fetch operation.
   * @param [options.limit=1000] - The maximum number of dogs to fetch per page.
   * @param [options.page=1] - The page of results to fetch.
   * @param [options.searchString=''] - A string to search for in the dogs' names.
   *
   * @throws Throws an {Error} if the fetch operation fails or returns a non-200 status.
   *
   * @returns {Promise<PaginatedDogs>} A Promise that resolves with the fetched dogs as a PaginatedDogs object.
   */
  async getDogs({ limit = 1000, page = 1, searchString = '' }: GetDogsParams) {
    const response = await fetch(
      `${API_URL}/dogs?limit=${limit}&page=${page}&search=${searchString
        .trim()
        .toLowerCase()}`
    )
    const data = await response.json()
    if (response.status !== 200) {
      throw new Error(`Failed to fetch dogs -- ${response.statusText}`)
    }
    return data as PaginatedDogs
  }

  /**
   * Retrieves a dog by ID from the API.
   * @param  dogId - The ID of the dog to retrieve.
   * @returns A Promise that resolves to either the retrieved Dog object or undefined if no
   *     dog was found with the given ID.
   * @throws Throws an error if the API request fails for any reason.
   */
  async getDog(dogId: Dog['id']): Promise<Dog | undefined> {
    const response = await fetch(`${API_URL}/dogs/${dogId}`)
    const data = await response.json()
    if (response.status !== 200) {
      throw new Error(
        `Failed to fetch dog (${dogId}) -- ${
          response.statusText ?? response.body ?? 'unknown error'
        }`
      )
    }
    return data as Dog
  }

  /**
   * Searches for dogs by a given search string and returns the results.
   */
  async searchDogs(searchString: string) {
    return await this.getDogs({ searchString })
  }

  /**
   * Retrieves the favorites of a user from the server.
   * @returns An array containing the ids of the the user's favorite dogs.
   * @throws  An error is thrown if the request fails.
   */
  async getFavorites() {
    const response = await fetch(`${API_URL}/favorites/${USERNAME}`)
    const data = await response.json()
    if (response.status !== 200) {
      throw new Error(
        `Failed to fetch favorites -- ${
          response.statusText ?? response.body ?? 'unknown error'
        }`
      )
    }
    return data as Favorites
  }

  /**
   * Sets whether a dog is favorited or not.
   * @async
   * @param {string} dog - The ID of the dog to favorite.
   * @param {boolean} isFavorite - Whether the dog should be favorited or unfavorited.
   * @return {Promise<boolean>} A Promise that resolves to the new favorite status of the dog.
   */
  async setFavorite(dog: Dog['id'], isFavorite: boolean) {
    const response = await fetch(`${API_URL}/favorites/${USERNAME}/${dog}`, {
      method: 'POST',
      body: JSON.stringify({
        isFavorite,
      }),
    })
    if (response.status !== 200) {
      console.warn(
        `Failed to toggle favorite (${dog}) -- ${
          response.statusText ?? response.body ?? 'unknown error'
        }`
      )
    }

    const data = await response.json()

    return {
      isFavorite: data.isFavorite as boolean,
      favorites: data.favorites as Favorites,
    }
  }
}

export const dogsApi = new DogsApi()
