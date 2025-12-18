import React from 'react'
import { useData } from '../Context/DataContext'
import { useToast } from '../components/ToastContainer'

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useData()
  const { showInfo } = useToast()

  const handleRemoveFromCart = (itemId, itemTitle) => {
    removeFromCart(itemId)
    showInfo(`${itemTitle.slice(0, 30)}... removed from cart`, 2000)
  }

  const handleUpdateQuantity = (itemId, newQuantity, itemTitle) => {
    updateQuantity(itemId, newQuantity)
    if (newQuantity === 0) {
      showInfo(`${itemTitle.slice(0, 30)}... removed from cart`, 2000)
    } else {
      showInfo(`Quantity updated for ${itemTitle.slice(0, 20)}...`, 1500)
    }
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600">Add some products to get started!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center border-b border-gray-200 py-4 last:border-b-0">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-20 h-20 object-cover rounded-md mr-4"
              />
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{item.title}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => handleUpdateQuantity(item.id, item.quantity - 1, item.title)}
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  -
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button 
                  onClick={() => handleUpdateQuantity(item.id, item.quantity + 1, item.title)}
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  +
                </button>
              </div>
              
              <div className="ml-6 text-right">
                <p className="text-lg font-semibold text-gray-800">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button 
                  onClick={() => handleRemoveFromCart(item.id, item.title)}
                  className="text-red-500 hover:text-red-700 text-sm mt-1"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-semibold">Total:</span>
            <span className="text-2xl font-bold text-gray-800">${getCartTotal().toFixed(2)}</span>
          </div>
          <button className="w-full bg-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-600 transition-colors">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart