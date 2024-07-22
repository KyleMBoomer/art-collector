import { createContext, useContext, useState } from 'react';
import { FavoriteRecord } from '../Utility/Types'

const defaultValue: [FavoriteRecord[], (favoriteRecords: FavoriteRecord[]) => void] = [
  [],
  () => {}
]

const FavoriteContext = createContext(defaultValue)

export const useFavorites = () => useContext(FavoriteContext)

export const FavoriteProvider = ({ children }: { children: React.ReactNode }) => {
  const [favoriteRecords, setFavoriteRecords] = useState<FavoriteRecord[]>([]);
  
  return (
    <FavoriteContext.Provider value={[favoriteRecords, setFavoriteRecords]}>
      {children}
    </FavoriteContext.Provider>
  )
  
}