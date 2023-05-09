import { Dog } from '../services/types'
import DOGS_JSON from '../../assets/dogs.json'

/**
 * Custom React hook to fetch a single dog by its ID.
 *
 * @example
 * const dog = useDog(dogId);
 *
 * @param {string} dogId - The ID of the dog to fetch.
 * @returns {Dog | null} The fetched dog or null if not yet fetched.
 */
export function useDog(dogId: string) {
  // Return the dog state
  return DOGS_JSON.find((dog) => dog.id === dogId)
}
