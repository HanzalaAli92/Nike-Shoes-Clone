'use client'

import React, { useEffect, useState } from 'react'
import { Product } from '../../../types/products'
import { getCartItems } from '../actions/actions'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import Swal from 'sweetalert2'
import { client } from '@/sanity/lib/client'

const Checkout = () => {
    const [cartItems, setCartItems] = useState<Product[]>([])
    const [productCart, setProductCart] = useState<Product[]>([])
    const [discount, setDiscount] = useState<number>(0)

    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        zipCode: "",
        city: "",
    })

    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        address: false,
        zipCode: false,
        city: false,
    })

    useEffect(() => {
        const cart = getCartItems()
        setProductCart(cart)
        setCartItems(cart)

        const appliedDiscount = localStorage.getItem("appliedDiscount")
        if (appliedDiscount) {
            setDiscount(Number(appliedDiscount))
        }
    }, [])

    const subTotal = cartItems.reduce((total, item) => total + item.price * (item.inventory || 1), 0)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value
        })
    }

    const validateForm = () => {
        const errors = {
            firstName: !formValues.firstName,
            lastName: !formValues.lastName,
            email: !formValues.email,
            phone: !formValues.phone,
            address: !formValues.address,
            zipCode: !formValues.zipCode,
            city: !formValues.city,
        };
        setFormErrors(errors)
        return Object.values(errors).every((error) => !error)
    }

    const handlePlaceOrder = async () => {
        Swal.fire({
            title: "Processing your order...",
            text: "Please wait a moment",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Proceed",
        }).then(async (result) => {
            if (result.isConfirmed) {
                if (validateForm()) {
                    localStorage.removeItem("appliedDiscount");
                    Swal.fire("Success", "Your order has been successfully processed!", "success");

                    const orderData = {
                        _type: 'order',
                        firstName: formValues.firstName,
                        lastName: formValues.lastName,
                        email: formValues.email,
                        phone: formValues.phone,
                        address: formValues.address,
                        zipCode: formValues.zipCode,
                        city: formValues.city,
                        cartItems: cartItems.map(item => ({
                            _type: 'reference',
                            _ref: item._id,
                        })),
                        total: subTotal,
                        discount: discount,
                        orderDate: new Date().toISOString(),
                    };

                    try {
                        await client.create(orderData)
                        localStorage.removeItem("appliedDiscount")
                    } catch (error) {
                        console.log("Error creating order:", error)
                    }
                } else {
                    Swal.fire("Error!", "Please fill in all the fields before proceeding.", "error");
                }
            }
        })
    };

    return (
        <div>
            <div className="flex justify-end items-center mr-6 gap-7">
                <p>000 800 100 9538</p>
                <Image src="/message-01.png" alt="Message" width={20} height={20} />
                <Image src="/box.png" alt="Box" width={20} height={20} />
            </div>
            <div className="flex lg:flex-row flex-col items-start mt-10 gap-10 mx-auto bg-white p-6">
                <div className="mx-auto max-w-md mt-10">
                    <div className="min-h-screen flex items-center justify-center">
                        <div className="bg-white border rounded-lg p-6 space-y-6 shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                Billing Information
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                        First Name
                                    </label>
                                    <input
                                        id="firstName"
                                        placeholder="Enter your first name"
                                        value={formValues.firstName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                                    />
                                    {formErrors.firstName && <p className="text-sm text-red-500 mt-1">First name is required.</p>}
                                </div>
                            </div>

                            <button
                                className="w-full h-12 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-all"
                                onClick={handlePlaceOrder}
                            >
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center mx-auto">
                    <div className="w-full max-w-md p-6">
                        <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

                        <div className="flex justify-between items-center mb-2">
                            <p className="text-gray-600">Subtotal</p>
                            <p className="font-medium">${subTotal.toFixed(2)}</p>
                        </div>

                        <div className="flex justify-between items-center mb-2">
                            <p className="text-gray-600">Delivery/Shipping</p>
                            <p className="font-medium">Free</p>
                        </div>

                        <div className="flex justify-between items-center border-t border-gray-200 pt-4 mb-4">
                            <p className="text-lg font-medium">Total</p>
                            <p className="text-lg font-bold">${(subTotal - discount).toFixed(2)}</p>
                        </div>

                        <div className="mb-4">
                            {productCart.map((item) => (
                                <div className="flex items-start mb-4" key={item._id}>
                                    {item.image && (
                                        <Image src={urlFor(item.image).url()} alt={item.productName} width={80} height={80} />
                                    )}
                                    <div className="ml-4">
                                        <p className="font-medium">{item.productName}</p>
                                        <p className="text-sm text-gray-500">Qty {item.inventory}</p>
                                        <p className="text-sm font-medium mt-2">${item.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout