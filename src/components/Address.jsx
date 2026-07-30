import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Address.css";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
const Address = () => {
  
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);


  const [address, setAddress] = useState({
    fullName:"",
    phone:"",
    state:"",
    city:"",
    street:"",
    postalCode:""
  });

useEffect(() => {
  if (!user) return;

  const saved = JSON.parse(
    localStorage.getItem(`address_${user.email}`)
  );

  if (saved) {
    setAddress(saved);
  }
}, [user]);


  const handleChange = (e)=>{

    setAddress({
      ...address,
      [e.target.name]:e.target.value
    });

  };



  const saveAddress = ()=>{

    if(
      !address.fullName ||
      !address.phone ||
      !address.state ||
      !address.city ||
      !address.street
    ){

      alert("Please fill all details");

      return;

    }


localStorage.setItem(
  `address_${user.email}`,
  JSON.stringify(address)
);


    alert("Address Saved");


    navigate("/checkout");

  };



  return (

    <div className="addressPage">


      <div className="addressCard">


        <button
          className="back"
          onClick={()=>navigate(-1)}
        >
          ← Back
        </button>



        <h1>
          📍 Delivery Address
        </h1>



        <div className="form">


          <input
            name="fullName"
            placeholder="Full Name"
            value={address.fullName}
            onChange={handleChange}
          />



          <input
            name="phone"
            placeholder="Phone Number"
            value={address.phone}
            onChange={handleChange}
          />



          <input
            name="state"
            placeholder="State"
            value={address.state}
            onChange={handleChange}
          />



          <input
            name="city"
            placeholder="City"
            value={address.city}
            onChange={handleChange}
          />



          <input
            name="street"
            placeholder="Street Address"
            value={address.street}
            onChange={handleChange}
          />



          <input
            name="postalCode"
            placeholder="Postal Code"
            value={address.postalCode}
            onChange={handleChange}
          />



          <button
            className="saveBtn"
            onClick={saveAddress}
          >
            Save Address
          </button>


        </div>


      </div>


    </div>

  );

};


export default Address;