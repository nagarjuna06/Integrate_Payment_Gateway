import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Product from "./product";

const App = () => {
  const [data, setData] = useState(null);
  const apiCall = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setData(res.data);
  };
  useEffect(() => {
    apiCall();
  }, []);
  const handleBuyNow = (info) => {
    const { price } = info;
    console.log(info);
    const key = import.meta.env;
    var options = {
      key: key.VITE_KEY,
      key_secret: key.VITE_KEY_SECRET,
      amount: price * 100,
      currency: "INR",
      name: "FAKE STORE",
      description: "for testing purpose",
      image: "https://fakestoreapi.com/icons/logo.png",
      handler: function (response) {
        alert("payment id : " + response.razorpay_payment_id);
      },
      // prefill: {
      //   name: "Nagarjuna",
      //   email: "nagarjuna@gmail.com",
      //   contact: "9381053268",
      // },
      notes: {
        address: "Razorpay Corporate office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };
  return (
    <div>
      <header>
        <img src="https://fakestoreapi.com/icons/logo.png" alt="logo" />
        <h1>FAKE STORE</h1>
      </header>
      <div className="promotion">
        <div>
          <h1>Fake Store</h1>
          <p>Fake store for your e-commerce or shopping website prototype</p>
        </div>
        <img src="https://fakestoreapi.com/icons/intro.svg" alt="img" />
      </div>
      <div className="products">
        {data
          ? data.map((each) => (
              <Product {...each} key={each.id} buyNow={handleBuyNow} />
            ))
          : ""}
      </div>
    </div>
  );
};

export default App;
