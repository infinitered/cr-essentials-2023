import { useState, useEffect } from 'react'
import { Dog } from '../services/types'
import { dogsApi } from '../services/dogs-api'

/**
 * Custom React hook to fetch a single dog by its ID.
 *
 * @example
 * const dog = useDog(dogId);
 *
 * @param {string} dogId - The ID of the dog to fetch.
 * @returns {Dog | null} The fetched dog or null if not yet fetched.
 * @see {@link DogsApi} for the underlying API class.
 */
export function useDog(dogId: string) {
  // Initialize dog state as null
  const [dog, setDog] = useState<Dog | null>(null)

  // Fetch the dog by its ID when the dogId changes
  useEffect(() => {
    // Call the getDog method from the DogsApi class and set the dog state
    dogsApi.getDog(dogId).then((dog) => setDog(dog))
  }, [dogId])

  // Return the dog state
  return dog
}
