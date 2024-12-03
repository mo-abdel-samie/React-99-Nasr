import React, { useEffect, useState } from "react";

export default function Counter() {
  //   let count = 0;
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  //   console.log("1st Step");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(({ products }) => setProducts(products));

    return () => {};
  }, [count]);

  //   const increment = () => {
  //     setCount(count + 1);
  //   };

  //   const decrement = () => {
  //     setCount(count - 1);
  //   };

  return (
    <div className="text-center">
      {/* {console.log("From render")} */}
      <p>{count}</p>
      <button onClick={() => setCount((pre) => pre + 1)}>Up</button>
      <button onClick={() => setCount(count - 1)}>Down</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
