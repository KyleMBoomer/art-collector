import { createContext, useContext, useState } from 'react';
import { FavoriteRecord } from '../Utility/Types'

const FavoriteContext = createContext<[FavoriteRecord[], (favoriteRecords: FavoriteRecord[]) => void]>()

export const useFavorites = () => useContext(FavoriteContext)

export const FavoriteProvider = ({ children }: { children: React.ReactNode }) => {
  const [favoriteRecords, setFavoriteRecords] = useState<FavoriteRecord[]>([])
  
  return (
    <FavoriteContext.Provider value={[favoriteRecords, setFavoriteRecords]}>
      {children}
    </FavoriteContext.Provider>
  )  
}