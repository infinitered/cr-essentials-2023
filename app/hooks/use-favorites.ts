import { useState, useCallback, useEffect } from 'react'
import { Favorites, Dog } from '../services/types'
import { dogsApi } from '../services/dogs-api'

/**
 * Custom React hook to fetch and manage a user's list of favorite dogs.
 * @example
 * const { favorites, isLoading, setFavorite, isFavorite, getFavorites } = useFavorites();
 */
export function useFavorites() {
  const [favorites, setFavorites] = useState<Favorites>([])
  const [isLoading, setIsLoading] = useState(false)

  /**
   * Fetches the list of favorite dogs from the server and updates the state.
   */
  const getFavorites = useCallback(async () => {
    const favorites = await dogsApi.getFavorites()
    setFavorites(favorites)
    setIsLoading(false)
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
  const setFavorite = useCallback(
    async (dog: Dog['id'], isFavorite: boolean) => {
      const result = await dogsApi.setFavorite(dog, isFavorite)
      setFavorites(result.favorites)
      return result.isFavorite
    },

    [getFavorites]
  )

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

  useEffect(() => {
    setIsLoading(true)
    getFavorites()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    favorites,
    setFavorite,
    isFavorite,
    isLoading,
    getFavorites,
  }
}
