import { useState, useCallback, useEffect } from 'react'
import { PaginatedDogs, Dog } from '../services/types'
import { dogsApi } from '../services/dogs-api'

interface UseDogsReturnValue {
  dogs: Dog[]
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
  const fetchNextPage = useCallback(async (): Promise<void> => {
    const { currentPage, totalPages } = dogs
    if (currentPage < totalPages) {
      // Call the getDogs method with the next page number and concatenate the new dogs to the existing dogs list
      const newDogs = await getDogs({ page: currentPage + 1 })
      setDogs({ ...newDogs, dogs: [...dogs.dogs, ...newDogs.dogs] })
      setIsLoading(false)
    }
  }, [dogs, getDogs])

  /**
   * Calls the getDogs API with the given search string and updates the state with the new dogs fetched.
   */
  const searchDogs = useCallback(
    async (searchString: string) => {
      setIsLoading(true)
      await dogsApi.searchDogs(searchString)
      setIsLoading(false)
    },
    [getDogs]
  )

  useEffect(() => {
    /**
     * Fetches the first page of dogs when the component mounts.
     */
    async function fetchData() {
      setIsLoading(true)
      const newDogs = await getDogs({})
      setDogs({
        ...newDogs,
        dogs: [...dogs.dogs, ...newDogs.dogs],
      })
      setIsLoading(false)
    }

    fetchData()
  }, [])

  return {
    dogs: dogs.dogs,
    isLoading,
    fetchNextPage,
    searchDogs,
  }
}
