import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";


 export const ShopContext = createContext();

 const ShopContextProvider = (props) => {
 
    const currency = '$';
    const delivery_fees = 10;

    const [search , setSearch] = useState('');
    const [showSearch , setShowSearch] = useState(false);
    const [cartItem, setCartItem] = useState({});

    const addToCard = (itemId) => {
      setCartItem((prevCart) => {
        const updatedCart = { ...prevCart, [itemId]: (prevCart[itemId] || 0) + 1 };
        
         
        return updatedCart;
      });
    };

    const  removeFromCart = (itemId) => {
      setCartItem((prevCart) => {
        const updatedCart = { ...prevCart, [itemId]: (prevCart[itemId] || 0) - 1 };
        
         
        return updatedCart;
      });
    };
    const deleteFromCart = (itemId) => {
      setCartItem((prevCart) => {
        const newCart = { ...prevCart };
        delete newCart[itemId];
        return newCart;
      });
    };
    
  
 

    const getCartCount = () => {
      return Object.values(cartItem).reduce((total, count) => total + count, 0);
  };
  

    const value = {
    products,
    currency,
    delivery_fees,
    search , setSearch,showSearch , setShowSearch,cartItem, addToCard,getCartCount,deleteFromCart,removeFromCart
    }
    return (
        <ShopContext.Provider value={value}>
           {props.children}
        </ShopContext.Provider>
    )
 }

 export default ShopContextProvider;