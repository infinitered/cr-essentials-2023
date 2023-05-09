import { useState, useCallback } from 'react'
import { Favorites, Dog } from '../services/types'

/**
 * Custom React hook to fetch and manage a user's list of favorite dogs.
 * @example
 * const { favorites, isLoading, setFavorite, isFavorite, getFavorites } = useFavorites();
 */
export function useFavorites() {
  const [favorites, setFavorites] = useState<Favorites>([])
  const [isLoading, setIsLoading] = useState(false)

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

  return {
    favorites,
    setFavorite,
    isFavorite,
    isLoading,
  }
}
