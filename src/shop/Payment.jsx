import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../hooks/useCart";

// Move stripePromise outside the component to prevent it from being recreated on every render
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {
    const [cart] = useCart();
    console.log(cart);

    // Ensure all prices are converted to numbers and calculate checkout total
    const cartTotal = cart.reduce((sum, item) => {
        // Remove currency symbol and commas
        const cleanPrice = item.price.replace(/[₦,]/g, '');
        const price = parseFloat(cleanPrice);

        if (isNaN(price)) {
            console.error(`Invalid price for item:`, item);
            return sum; // Skip this item
        }
        return sum + price;
    }, 0);

    // console.log(cartTotal);

    // Optionally, format the total amount as a currency
    const formattedTotal = cartTotal.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' });
    // console.log(formattedTotal);

    

    return (
        <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 py-28">
            <Elements stripe={stripePromise}>
                <CheckoutForm price={cartTotal} cart={cart} />
            </Elements>
            <div>Total Amount: {formattedTotal}</div>
        </div>
    );
};

export default Payment;
