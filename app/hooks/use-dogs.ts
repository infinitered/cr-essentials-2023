import { useState, useCallback } from 'react'

import DOGS_JSON from '../../assets/dogs.json'
import { Dog, PaginatedDogs } from '../services/types'
// import { dogsApi } from '../services/dogs-api'

interface UseDogsReturnValue {
  dogs: Dog[]
  // isLoading: boolean
  // fetchNextPage: () => void
  searchDogs: (searchString: string) => void
}

/**
 * Custom React hook to fetch a list of dogs.
 */
export function useDogs(): UseDogsReturnValue {
  const [dogs, setDogs] = useState<Dog[]>(DOGS_JSON)

  /**
   * Custom React hook to fetch a list of dogs.
   *
   * @returns {Object} An object containing the list of dogs, a boolean indicating whether the list is currently being
   *     fetched, and functions to fetch the next page of dogs and search for dogs.
   *
   * @example
   */
  const getDogs = useCallback((): PaginatedDogs => {
    //
    // Use dogsApi.getDogs() to fetch the first page of dogs.
    //
    throw new Error('Not implemented')
  }, [])

  const fetchNextPage = useCallback(() => {
    //
    // use dogsApi.getDogs() to fetch the next page of dogs, by passing page and limit params.
    //
    throw new Error('Not implemented')
  }, [])

  /**
   * If a search string is provided, filters the list of dogs by name. Otherwise, resets the list of dogs to the
   * original list.
   * @param {string} searchString - The search string to be passed to the API.
   * @returns {void}
   */
  const searchDogs = useCallback((searchString: string) => {
    //
    //  TASK: Use the dogsApi.searchDogs() function to search for dogs by name. If the search string is empty, call getDogs().
    //
    if (searchString.trim() === '') {
      setDogs(DOGS_JSON)
      return
    }

    const filteredDogs = DOGS_JSON.filter((dog) =>
      dog.name.toLowerCase().includes(searchString.trim().toLowerCase())
    )
    setDogs(filteredDogs)
  }, [])

  //
  //  TASK: Use the useEffect() hook to fetch the first page of dogs when the component mounts.
  //

  return {
    dogs,
    // isLoading,
    // fetchNextPage,
    searchDogs,
  }
}
