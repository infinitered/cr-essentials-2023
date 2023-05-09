import { useState, useCallback } from 'react'
import { Favorites, Dog } from '../services/types'
// import { dogsApi } from '../services/dogs-api'

/**
 * Custom React hook to fetch and manage a user's list of favorite dogs.
 * @example
 * const { favorites, isLoading, setFavorite, isFavorite, getFavorites } = useFavorites();
 */
export function useFavorites() {
  const [favorites, setFavorites] = useState<Favorites>([])
  //
  // TASK: Use the isLoading state variable to indicate whether the favorites are being fetched or not.
  //
  const [isLoading, setIsLoading] = useState(false)

  /**
   * Fetches the list of favorite dogs from the server and updates the state.
   * @example
   *  getFavorites()
   */
  const getFavorites = useCallback(async () => {
    //
    // TASK: Use dogsApi.getFavorites() to fetch the list of favorite dogs.
    //
  }, [])

  /**
   * Sets a dog as a favorite or removes it from the list of favorite dogs.
   * @example
   *   // add the dog to the list of favorites
   *   setFavorite("892177421306343426", true)
   *
   *   // remove the dog from the list of favorites
   *   setFavorite("892177421306343426", false)
   */
  const setFavorite = useCallback((dog: string, isFavorite: boolean) => {
    //
    // TASK: Use dogsApi.setFavorite() to set a dog as a favorite or remove it from the list of favorite dogs.
    //       - note: dogsApi.setFavorite returns the updated list of favorites
    //
    const newFavorites = favorites.filter((favorite) => favorite !== dog)
    if (isFavorite) {
      newFavorites.push(dog)
    }
    setFavorites(newFavorites)
  }, [])

  /**
   * Checks if a dog is a favorite.
   * @example
   *  // check if the dog is a favorite and give it a treat either way
   *  isFavorite("892177421306343426") ? giveTreat() : giveTreat()
   */
  const isFavorite = useCallback(
    (id: Dog['id']) => favorites.includes(id),
    [favorites]
  )

  //
  // TASK: Use a useEffect() hook to fetch the list of favorites when the component mounts.
  //

  return {
    favorites,
    setFavorite,
    isFavorite,
    isLoading,
    getFavorites,
  }
}
