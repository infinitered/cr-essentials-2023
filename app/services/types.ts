export interface Dog {
  id: string
  name: string
  description: string
  photo: string
  rating: number
  avatar: string
  good: boolean
}

export type Dogs = Array<Dog>

export interface PaginatedDogs {
  dogs: Dogs
  totalPages: number
  currentPage: number
}

export type Favorites = Array<Dog['id']>
