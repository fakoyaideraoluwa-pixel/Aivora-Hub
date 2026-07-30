import React,{useState,useEffect} from 'react'
import {Link, useSearchParams} from 'react-router-dom'

const Search = () => {
  const [products, setProduct] = useState([]);

  const [search] = useSearchParams();

  const query = search.get("q")?.toLowerCase() || "";

  useEffect(() => {
    fetch("/All.json")
      .then((res) => res.json())
      .then((data) => {

        const allProducts = [
          ...data.baby,
          ...data.electronics,
          ...data.appliances,
          ...data.menskincare,
          ...data.menbags,
          ...data.menshoes,
          ...data.menjewels,
          ...data.mencosmestics,
          ...data.menhairkits,
          ...data.kitappliances,
          ...data.menclothes,
          ...data.bodyspraym,
          ...data.womenclothes,
          ...data.womenshoes,
          ...data.womenbags,
          ...data.womencosmestics,
          ...data.womenjewels,
          ...data.womenskin,
          ...data.womenhairkits,
          ...data.wmenbodyspray,
        ];

        setProduct(allProducts);

      })
      .catch((error) =>
        console.error("Error fetching products:", error)
      );
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  return (
    <>
      <Link
        to="/"
        className="btn btn-dark m-2"
        style={{ position: "fixed" }}
      >
        Home
      </Link>

      <div className="product">

        <h1
          style={{
            textAlign: "center",
            margin: "20px 0",
          }}
        >
          Search Results
        </h1>

        {filteredProducts.length === 0 ? (
          <h2 style={{ textAlign: "center" }}>
            No Product Found
          </h2>
        ) : (
          <div className="product-grid">

            {filteredProducts.map((product) => (

              <div
                className="product-card"
                key={product.id}
              >

                <img
                  src={product.image}
                  alt={product.name}
                />

                <h3>{product.name}</h3>

                <p>${product.price}</p>

                <Link to={`/details/${product.id}`}>
                  <button className="btn btn-dark">
                    View
                  </button>
                </Link>

              </div>

            ))}

          </div>
        )}
      </div>
    </>
  );
};

export default Search;

