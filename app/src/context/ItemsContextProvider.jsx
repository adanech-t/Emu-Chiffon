import { createContext, useContext } from "react";
import useItems from "../hooks/useItems";

export const ItemsContext = createContext();

export function useItemsContext() {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error("");
  }
  return context;
}

export default function ItemsContextProvider({ children }) {
  const items = useItems();
  return (
    <ItemsContext.Provider value={items}>{children}</ItemsContext.Provider>
  );
}
