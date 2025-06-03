'use client'
import { useRouter } from 'next/navigation';
import { useState, createContext, useContext } from 'react'
import toast from 'react-hot-toast';

const OrderContext = createContext();

export const OrderProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [orderVisible, setOrderVisible] = useState(false);
    const router = useRouter();
    
     const placeOrder = () => {
        setLoading(true);
        setOrderVisible(true);
        router.push('/cart/orders');
        toast.success("Your order has been placed");
        setTimeout(()=>{
            setLoading(false);
        }, 8000);
    }
    // console.log(loading);


    return (
        <OrderContext.Provider value={{ loading, setLoading, placeOrder, orderVisible }}>
            {children}
        </OrderContext.Provider>
    )
}
export const useOrder = () => useContext(OrderContext);
