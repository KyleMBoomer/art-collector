import React, { createContext, useContext, useState } from 'react';

const FavoriteContext = createContext()

export const useFavorites = () => useContext(FavoriteContext)

export const FavoriteProvider = ({ children }) => {
  const [favoriteRecords, setFavoriteRecords] = useState([])
  
  return (
    <FavoriteContext.Provider value={[favoriteRecords, setFavoriteRecords]}>
      {children}
    </FavoriteContext.Provider>
  )
  
}