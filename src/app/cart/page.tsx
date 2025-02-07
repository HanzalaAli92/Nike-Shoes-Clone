'use client';

import React, { useEffect, useState } from 'react';
import { Product } from '../../../types/products';
import { getCartItems, removeFormCart, updateCartQuantity } from '../actions/actions';
import Swal from 'sweetalert2';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { useRouter } from 'next/navigation';

const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this item!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!',
    }).then((result) => {
      if (result.isConfirmed) {
        removeFormCart(id);
        setCartItems(getCartItems());
        Swal.fire('Removed!', 'Item has been removed.', 'success');
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);

    if (product) handleQuantityChange(id, product.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);

    if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
  };

  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };
  
  const router = useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: 'Proceed to Checkout',
      text: 'Please review your cart before checkout',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Proceed',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Success', 'Your order has been successfully processed', 'success');
        router.push("/checkout")
        //clear the cart after proceeding (optional)
        setCartItems([]);
      }
    });
  };

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid gap-4">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between p-4 border rounded-lg shadow-sm"
            >
              <div className="flex items-center gap-4">
                {item.image && (
                  <Image
                  src={urlFor(item.image).url()}
                  alt={item.productName}
                  width={500}
                  height={500}
                  className="w-16 h-16 object-cover rounded-lg"
                  />
                )}
                <div>
                  <h2 className="text-lg font-medium">{item.productName}</h2>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  className="px-2 py-1 bg-gray-200 rounded-lg"
                  onClick={() => handleDecrement(item._id)}
                >
                  -
                </button>
                <span>{item.inventory}</span>
                <button
                  className="px-2 py-1 bg-gray-200 rounded-lg"
                  onClick={() => handleIncrement(item._id)}
                >
                  +
                </button>
                <button
                  className="px-4 py-2 text-red-500 border border-red-500 rounded-lg"
                  onClick={() => handleRemove(item._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">Total: ${calculatedTotal().toFixed(2)}</h2>
            <button
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={handleProceed}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
