import React, { useEffect, useState } from "react";
import "./Checkout.css";

import PaymentModal from "./PaymentModal";
import SuccessModal from "./SuccessModal";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { WalletContext } from "../components/WalletContext";

const Checkout = () => {

  const navigate = useNavigate();


  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState(null);
  const [delivery, setDelivery] = useState("standard");
  const { user } = useContext(AuthContext);

  const [paymentMethod, setPaymentMethod] = useState("card");

useEffect(() => {
  console.log("useEffect running");

  if (!user?.email) {
    console.log("No user email");
    return;
  }

  console.log("Looking for:", `address_${user.email}`);
  console.log("Address:", localStorage.getItem(`address_${user.email}`));
  console.log("Cart:", localStorage.getItem(`cart_${user.email}`));

  const savedCart =
    JSON.parse(localStorage.getItem(`cart_${user.email}`)) || [];

  const savedAddress =
    JSON.parse(localStorage.getItem(`address_${user.email}`)) || null;

  setCart(savedCart);
  setAddress(savedAddress);
}, [user]);
  // AIVORA WALLET


const {
 walletBalance,
 updateWallet
} = useContext(WalletContext);


  const [coupon, setCoupon] = useState("");

  const [discount, setDiscount] = useState(0);


  const [showPayment, setShowPayment] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);


  const [reference, setReference] = useState("");


console.log("Wallet Balance:", walletBalance);
console.log("Logged In User:", user);
console.log(
  "LocalStorage User:",
  JSON.parse(localStorage.getItem("loggedInUser"))
);








  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.qty,
    0
  );





  const deliveryFee =
    delivery === "standard"
      ? 2500
      : 5000;





  const total = Math.max(
    subtotal + deliveryFee - discount,
    0
  );







  const estimatedDate = () => {


    const date = new Date();


    const days =
      delivery === "standard"
        ? 5
        : 2;


    date.setDate(
      date.getDate() + days
    );


    return date.toDateString();


  };







  // COMPLETE ORDER

  const completeOrder = (paymentReference) => {
    if (!user) return;

    const orders =
      JSON.parse(localStorage.getItem(`orders_${user.email}`)) || [];

    const orderStatus =
      paymentMethod === "card" || paymentMethod === "wallet"
        ? "Paid"
        : "Pending";

    const order = {
      id: Date.now(),
      reference: paymentReference,
      items: cart,
      subtotal,
      deliveryFee,
      discount,
      total,
      delivery,
      paymentMethod,
      address,
      date: new Date().toLocaleString(),
      estimatedDelivery: estimatedDate(),
      status: orderStatus,
    };





    orders.push(order);




  localStorage.setItem(
  `orders_${user.email}`,
  JSON.stringify(orders)
);





  localStorage.setItem(
  `lastReceipt_${user.email}`,
  JSON.stringify(order)
);





localStorage.removeItem(`cart_${user.email}`);




    setCart([]);


    setReference(paymentReference);


    setShowPayment(false);


    setShowSuccess(true);


  };







  // WALLET PAYMENT

  const payWithWallet = () => {


    if(walletBalance < total){


      alert(
        "Insufficient wallet balance"
      );


      return;

    }





    const newBalance =
      walletBalance - total;




    updateWallet(newBalance);



const updatedUser = {
  ...user,
  wallet: newBalance,
};

localStorage.setItem(
  "loggedInUser",
  JSON.stringify(updatedUser)
);

const users =
  JSON.parse(localStorage.getItem("users")) || [];

const updatedUsers = users.map((u) =>
  u.email === user.email ? updatedUser : u
);

localStorage.setItem(
  "users",
  JSON.stringify(updatedUsers)
);





const transactions =
  JSON.parse(
    localStorage.getItem(`transactions_${user.email}`)
  ) || [];





    transactions.unshift({

      id: Date.now(),

      type: "Payment",

      amount: total,

      date:
        new Date().toLocaleString()

    });





   localStorage.setItem(
  `transactions_${user.email}`,
  JSON.stringify(transactions)
);





    completeOrder(
      "WALLET-" + Date.now()
    );


  };

  




const applyCoupon = () => {


  const code =
    coupon.trim().toUpperCase();




  if(code === "WELCOME10"){


    setDiscount(subtotal * 0.1);


    alert(
      "10% discount applied"
    );


  }



  else if(code === "SAVE5000"){


    setDiscount(5000);


    alert(
      "₦5,000 discount applied"
    );


  }



  else if(code === "AIVORA20"){


    setDiscount(subtotal * 0.2);


    alert(
      "20% discount applied"
    );


  }



  else{


    setDiscount(0);


    alert(
      "Invalid coupon"
    );


  }


};







const placeOrder = () => {



  if(!address){


    alert(
      "Please add delivery address"
    );


    return;


  }





  if(
    cart.some(
      item => item.qty <= 0
    )
  ){


    alert(
      "Invalid cart quantity"
    );


    return;


  }








  if(paymentMethod === "card"){


    setShowPayment(true);


  }




  else if(paymentMethod === "wallet"){


    payWithWallet();


  }





  else{


    const ref =
      paymentMethod === "transfer"
        ? "TRANSFER-" + Date.now()
        : "COD-" + Date.now();





    completeOrder(ref);


  }



};







if (!user) {
  return (
    <div className="emptyCheckout">
      <h2>Please log in to checkout</h2>
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  );
}

if (cart.length === 0) {
  return (
    <div className="emptyCheckout">
      <h2>Your cart is empty</h2>



      <button
        onClick={() =>
          navigate("/")
        }
      >

        Continue Shopping

      </button>



    </div>


  );


}






return (
<>
<div className="checkout">



<div className="checkoutHeader">


<button

className="backBtn"

onClick={() =>
navigate(-1)
}

>

← Back

</button>




<h1>
Checkout
</h1>



</div>






<div className="checkoutGrid">



<div className="leftSide">




<div className="card">


<h3>
📍 Delivery Address
</h3>



{
address ?


<>

<h4>
{address.fullName}
</h4>


<p>
{address.street}
</p>


<p>
{address.city}, {address.state}
</p>


<p>
{address.phone}
</p>


</>


:


<p>
No address added
</p>


}




<button

className="smallBtn"

onClick={() =>
navigate("/address")
}

>


{
address
?
"Change Address"
:
"Add Address"
}


</button>



</div>






<div className="card">


<h3>
🚚 Delivery Method
</h3>





<label className="radioBox">


<input

type="radio"

checked={
delivery === "standard"
}

onChange={() =>
setDelivery("standard")
}

/>


<div>

<strong>
Standard Delivery
</strong>


<p>
3 - 5 Working Days
</p>


</div>


<span>
₦2,500
</span>


</label>






<label className="radioBox">


<input

type="radio"

checked={
delivery === "express"
}

onChange={() =>
setDelivery("express")
}

/>



<div>

<strong>
Express Delivery
</strong>


<p>
1 - 2 Working Days
</p>


</div>



<span>
₦5,000
</span>


</label>



</div>

{/* COUPON */}

<div className="card">

<h3>
🎟 Coupon Code
</h3>


<div className="coupon">


<input

type="text"

placeholder="Enter coupon"

value={coupon}

onChange={(e)=>
setCoupon(e.target.value)
}

/>



<button
onClick={applyCoupon}
>

Apply

</button>


</div>



<small>

Try:
{" "}
WELCOME10
{" "}
SAVE5000
{" "}
AIVORA20

</small>


</div>








{/* PAYMENT METHOD */}


<div className="card">


<h3>
💳 Payment Method
</h3>





<label className="radioBox">


<input

type="radio"

checked={
paymentMethod === "card"
}

onChange={() =>
setPaymentMethod("card")
}

/>



<div>

<strong>
Card Payment
</strong>


<p>
Pay securely with your card
</p>

</div>


</label>






<label className="radioBox">


<input

type="radio"

checked={
paymentMethod === "wallet"
}

onChange={() =>
setPaymentMethod("wallet")
}

/>



<div>

<strong>
Aivora Wallet
</strong>


<p>

Balance:
{" "}
₦{(walletBalance || 0).toLocaleString()}

</p>

</div>


</label>







<label className="radioBox">


<input

type="radio"

checked={
paymentMethod === "transfer"
}

onChange={() =>
setPaymentMethod("transfer")
}

/>



<div>

<strong>
Bank Transfer
</strong>


<p>
Pay directly from your bank
</p>

</div>


</label>








<label className="radioBox">


<input

type="radio"

checked={
paymentMethod === "cod"
}

onChange={() =>
setPaymentMethod("cod")
}

/>



<div>

<strong>
Cash On Delivery
</strong>


<p>
Pay when your order arrives
</p>

</div>


</label>



</div>



</div>









{/* RIGHT SIDE */}


<div className="rightSide">


<div className="summaryCard">


<h2>
📦 Order Summary
</h2>





{
cart.map((item)=>(

<div

className="checkoutItem"

key={item.id}

>


<img

src={item.image}

alt={item.name}

/>



<div>

<h4>
{item.name}
</h4>


<p>

Quantity:
{" "}
{item.qty}

</p>


</div>



<strong>

₦
{(
item.price * item.qty
)
.toLocaleString()}

</strong>



</div>


))

}






<hr />






<div className="summaryRow">


<span>
Subtotal
</span>


<strong>

₦
{subtotal.toLocaleString()}

</strong>


</div>





<div className="summaryRow">


<span>
Delivery Fee
</span>


<strong>

₦
{deliveryFee.toLocaleString()}

</strong>


</div>






<div className="summaryRow discount">


<span>
Discount
</span>


<strong>

-₦
{discount.toLocaleString()}

</strong>


</div>






<hr />





<div className="totalRow">


<span>
Total
</span>


<h2>

₦
{total.toLocaleString()}

</h2>


</div>






<div className="deliveryDate">


🚚 Estimated Delivery


<strong>

{estimatedDate()}

</strong>


</div>






<div className="secure">


🔒 Secure Checkout


<p>
Your payment information is protected.
</p>


</div>






<button

className="payButton"

onClick={placeOrder}

>


{

paymentMethod === "card"

?

`Pay ₦${total.toLocaleString()}`


:


paymentMethod === "wallet"

?


`Pay With Wallet ₦${total.toLocaleString()}`


:


"Place Order"


}



</button>



</div>


</div>


</div>


</div>





  

    
  <PaymentModal
    show={showPayment}
    total={total}
    onClose={() => setShowPayment(false)}
    onSuccess={(paymentReference) =>
      completeOrder(paymentReference)
    }
  />


  <SuccessModal
    show={showSuccess}
    reference={reference}
    total={total}
    onClose={() => navigate("/orders")}
  />
</>
);
}



export default Checkout;