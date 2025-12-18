import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState()
    const [cart, setCart] = useState([])

    // fetching all products from api
    const fetchAllProducts = async () => {
        try {
           const res = await axios.get('https://fakestoreapi.com/products?limit=300')
           console.log(res);
           const productsData = res.data
           // Add sample brands to products
           const brands = ['Nike', 'Adidas', 'Puma', 'Reebok', 'Apple', 'Samsung', 'Sony', 'LG', 'Dell', 'HP']
           const productsWithBrands = productsData.map(product => ({
               ...product,
               brand: brands[Math.floor(Math.random() * brands.length)]
           }))
           console.log(productsWithBrands)
           setData(productsWithBrands)
           
        } catch (error) {
            console.log(error);

        }
    }

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id)
            if (existingItem) {
                return prevCart.map(item => 
                    item.id === product.id 
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            } else {
                return [...prevCart, { ...product, quantity: 1 }]
            }
        })
    }

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId))
    }

    const updateQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId)
        } else {
            setCart(prevCart => 
                prevCart.map(item => 
                    item.id === productId 
                        ? { ...item, quantity }
                        : item
                )
            )
        }
    }

    const getCartTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    }

    const getCartCount = () => {
        return cart.reduce((count, item) => count + item.quantity, 0)
    }

    const getUniqueCategory = (data, property) =>{
        let newVal = data?.map((curElem) =>{
            return curElem[property]
        })
        newVal = ["All",...new Set(newVal)]
        return newVal
      }
    
      const categoryOnlyData = getUniqueCategory(data, "category")
      const brandOnlyData = getUniqueCategory(data, "brand")
    return <DataContext.Provider value={{ 
        data, 
        setData,
        fetchAllProducts, 
        categoryOnlyData, 
        brandOnlyData,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        getCartCount
    }}>
        {children}
    </DataContext.Provider>
}

export const useData = ()=> useContext(DataContext)