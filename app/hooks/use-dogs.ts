import { useState, useCallback, useEffect } from 'react'
import { PaginatedDogs } from '../services/types'
import { dogsApi } from '../services/dogs-api'

interface UseDogsReturnValue {
  dogs: PaginatedDogs
  isLoading: boolean
  fetchNextPage: () => void
  searchDogs: (searchString: string) => void
}

/**
 * Custom React hook to fetch a list of dogs.
 *
 * @returns {Object} An object containing the list of dogs, a boolean indicating whether the list is currently being
 *     fetched, and functions to fetch the next page of dogs and search for dogs.
 *
 * @example
 * const { dogs, isLoading, fetchNextPage, searchDogs } = useDogs();
 */
export function useDogs(): UseDogsReturnValue {
  const [dogs, setDogs] = useState<PaginatedDogs>({
    dogs: [],
    totalPages: 0,
    currentPage: 0,
  })

  const [isLoading, setIsLoading] = useState(false)
  const { getDogs } = dogsApi

  /**
   * Fetches the next page of dogs using the `getDogs` function and concatenates the new dogs to the existing dogs list.
   * @returns {void}
   */
  const fetchNextPage = useCallback(() => {
    const { currentPage, totalPages } = dogs
    if (currentPage < totalPages) {
      // Call the getDogs method with the next page number and concatenate the new dogs to the existing dogs list
      getDogs({ page: currentPage + 1 }).then((newDogs) => {
        setDogs({ ...newDogs, dogs: [...dogs.dogs, ...newDogs.dogs] })
        setIsLoading(false)
      })
    }
  }, [dogs, getDogs])

  /**
   * Calls the getDogs API with the given search string and updates the state with the new dogs fetched.
   * @param {string} searchString - The search string to be passed to the API.
   * @returns {void}
   */
  const searchDogs = useCallback(
    (searchString: string) => {
      setIsLoading(true)
      getDogs({ searchString }).then((newDogs) => {
        setDogs({ ...newDogs })
        setIsLoading(false)
      })
    },
    [getDogs]
  )

  // Fetch the first page of dogs when the component mounts
  useEffect(() => {
    setIsLoading(true)
    getDogs({}).then((newDogs) => {
      setDogs({
        ...newDogs,
        dogs: [...dogs.dogs, ...newDogs.dogs],
      })
      setIsLoading(false)
    })
  }, [])

  return {
    dogs,
    isLoading,
    fetchNextPage,
    searchDogs,
  }
}
