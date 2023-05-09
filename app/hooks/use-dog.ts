import { Dog } from '../services/types'
import DOGS_JSON from '../../assets/dogs.json'
// import { dogsApi } from '../services/dogs-api'

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
  //
  // TASK: Use the dogsApi.getDog() function to fetch a single dog by its ID.
  //     - note: you'll need a useState() hook to trigger a re-render when the dog is fetched.
  //

  //
  //  TASK: Use a useEffect() hook to fetch the first page of dogs when the component mounts.
  //

  // Return the dog state
  return DOGS_JSON.find((dog) => dog.id === dogId)
}
