/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { FaPaypal } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ price, cart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    if (typeof price !== 'number' || price <= 1) {
        console.log("Invalid price provided.");
        return;
    }
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret); // Corrected to use clientSecret
    });
  }, [price, axiosSecure]);

  const calculatePrice = (item) => {
    const priceWithoutSymbol = parseFloat(item.price.replace(/[^\d.-]/g, ''));
    const totalPrice = priceWithoutSymbol * item.quantity;
    return totalPrice;
  };

  const cartSubTotal = cart.reduce((total, item) => {
    return total + calculatePrice(item);
  }, 0);

  const cartTotal = cartSubTotal;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    // create a card element
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("success!");
    //   console.log("[PaymentMethod]", paymentMethod);
    }

    // Add this console log to check clientSecret before confirming payment
    console.log("ClientSecret:", clientSecret);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "unknown",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
    } else {
      console.log(paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log(paymentIntent.id);
        setCardError(`Your transaction was successful! Payment ID: ${paymentIntent.id}`);
        // payment info data here
        const paymentInfo = {
            email: user.email,
            transactionId: paymentIntent.id,
            price,
            quantity: cart.length,
            status: "Order Pending",
            itemName: cart.map(item => item.name),
            cartItems: cart.map(item => item._id),
        }
        console.log(paymentInfo);
        // Send payment info to your server for processing
        axiosSecure.post('/payments', paymentInfo).then(res => {
            console.log(res.data);
            alert("Payment successful! Your transaction ID");
            navigate('/order');
        })
      }
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-start items-start gap-8">
      {/* left side */}
      <div className="md:w-1/2 w-full space-y-3">
        <h4 className="text-lg font-semibold">Order Summary</h4>
        <p>Total Price: ₦{cartTotal.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        <p>Number of Items: {cart.length}</p>
      </div>
      {/* right side */}
      <div className="md:w-1/3 w-full space-y-5 card bg-base-100 max-w-sm shrink-0 shadow-2xl px-4 py-8">
        <h4 className="text-lg font-semibold bg-blue-400 text-black p-2 rounded">
          Process Your Payment!
        </h4>
        <h5 className="font-medium">Credit/Debit Card</h5>
        {/* Stripe form */}
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#fff",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            type="submit"
            disabled={!stripe}
            className="btn btn-sm mt-5 bg-primary w-full text-black"
          >
            Pay
          </button>
        </form>
        {cardError ? (
          <p className="text-red-500 italic text-sm">{cardError}</p>
        ) : (
          ""
        )}

        {/* PayPal */}
        <div className="mt-5 text-center">
          <hr />
          <button
            type="button" // Changed to "button" to avoid submitting the form
            className="btn btn-sm mt-5 bg-blue-600 text-black"
          >
            <FaPaypal /> Pay with PayPal
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
