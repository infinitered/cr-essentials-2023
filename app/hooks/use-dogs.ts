import { useState, useCallback } from 'react'

import DOGS_JSON from '../../assets/dogs.json'
import { Dog, PaginatedDogs } from '../services/types'

interface UseDogsReturnValue {
  dogs: Dog[]
  searchDogs: (searchString: string) => void
}

/**
 * Custom React hook to fetch a list of dogs.
 */
export function useDogs(): UseDogsReturnValue {
  const [dogs, setDogs] = useState<Dog[]>(DOGS_JSON)

  /**
   * If a search string is provided, filters the list of dogs by name. Otherwise, resets the list of dogs to the
   * original list.
   * @param {string} searchString - The search string to be passed to the API.
   * @returns {void}
   */
  const searchDogs = useCallback((searchString: string) => {
    if (searchString.trim() === '') {
      setDogs(DOGS_JSON)
      return
    }

    const filteredDogs = DOGS_JSON.filter((dog) =>
      dog.name.toLowerCase().includes(searchString.trim().toLowerCase())
    )
    setDogs(filteredDogs)
  }, [])

  return {
    dogs,
    searchDogs,
  }
}
