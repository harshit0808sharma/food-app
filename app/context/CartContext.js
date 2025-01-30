'use client'
import { useState, createContext, useContext } from 'react'

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [showMessage, setShowMessage] = useState(false);

    //ADD TO CART

    const addToCart = (product) => {
        // setCartItems((prevItems)=> [...prevItems, product]);
        setCartItems((prevItems)=> {
            const itemExists = prevItems.find((item)=> item.id === product.id);
            if(itemExists){
                return prevItems.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1} : item);
            }else{
                return [...prevItems, {...product, quantity: 1}];
            }
        });
        setShowMessage(true);
        setTimeout(()=> {
            setShowMessage(false);
        }, 2000)
    };
    //REMOVE ITEM FROM THE CART

    const removeFromCart = (productId) =>{
        setCartItems((prevItems)=> prevItems.filter((item)=> item.id !== productId));
    };

    //UPDATE THE QUANTITY OF ITEMS

    const updateQuantity = (productId, amount) => {
        setCartItems((prevItems)=> prevItems.map((item)=> item.id === productId ? {...item, quantity: item.quantity + amount}: item).filter((item)=> item.quantity > 0)
        )
    };
    //COUNT CART ITEMS

    const cartItemCount = cartItems.length;

    //CALCULATE TOTAL PRICE

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)


    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, cartItemCount, updateQuantity, totalPrice, showMessage}}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => useContext(CartContext);
