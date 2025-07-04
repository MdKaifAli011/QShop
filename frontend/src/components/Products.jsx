import Divider from "@mui/material/Divider";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  //   const [selectedCategory, setSelectedCategory] = useState([]);

  useEffect(() => {
    const sampleProducts = [
      {
        image: "https://example.com/products/shirt.jpg",
        title: "cotton casual shirt",
        description:
          "comfortable and breathable cotton casual shirt for daily wear",
        category: "clothing",
        brand: "united colors",
        price: 999,
        salePrice: 799,
        totalStock: 50,
        averageReview: 4.2,
      },
      {
        image: "https://example.com/products/laptop.jpg",
        title: "hp pavilion laptop",
        description:
          "powerful hp laptop with i5 processor and 8GB RAM for multitasking",
        category: "electronics",
        brand: "hp",
        price: 58999,
        salePrice: 54999,
        totalStock: 20,
        averageReview: 4.5,
      },
      {
        image: "https://example.com/products/smartphone.jpg",
        title: "samsung galaxy s21",
        description:
          "android smartphone with dynamic AMOLED display and high-end camera",
        category: "mobiles",
        brand: "samsung",
        price: 69999,
        salePrice: 64999,
        totalStock: 35,
        averageReview: 4.6,
      },
      {
        image: "https://example.com/products/shoes.jpg",
        title: "nike running shoes",
        description:
          "lightweight running shoes for men with extra grip and durability",
        category: "footwear",
        brand: "nike",
        price: 4999,
        salePrice: 3999,
        totalStock: 75,
        averageReview: 4.3,
      },
      {
        image: "https://example.com/products/watch.jpg",
        title: "fossil analog watch",
        description:
          "premium analog wristwatch with leather strap and metal case",
        category: "accessories",
        brand: "fossil",
        price: 10999,
        salePrice: 8999,
        totalStock: 15,
        averageReview: 4.0,
      },
      {
        image: "https://example.com/products/mixer.jpg",
        title: "philips mixer grinder",
        description: "750-watt powerful mixer grinder for daily kitchen use",
        category: "home appliances",
        brand: "philips",
        price: 3899,
        salePrice: 3499,
        totalStock: 30,
        averageReview: 4.1,
      },
      {
        image: "https://example.com/products/book.jpg",
        title: "atomic habits book",
        description: "bestseller book on building habits for long-term success",
        category: "books",
        brand: "penguin",
        price: 499,
        salePrice: 399,
        totalStock: 200,
        averageReview: 4.8,
      },
      {
        image: "https://example.com/products/table.jpg",
        title: "wooden study table",
        description: "compact wooden study table with drawer and open shelf",
        category: "furniture",
        brand: "urban ladder",
        price: 7999,
        salePrice: 7499,
        totalStock: 10,
        averageReview: 3.9,
      },
      {
        image: "https://example.com/products/earbuds.jpg",
        title: "boat airdopes 441",
        description:
          "wireless bluetooth earbuds with immersive sound and long battery",
        category: "audio",
        brand: "boat",
        price: 2999,
        salePrice: 2499,
        totalStock: 60,
        averageReview: 4.4,
      },
      {
        image: "https://example.com/products/helmet.jpg",
        title: "vega full face helmet",
        description:
          "strong and stylish full face helmet for two-wheeler riders",
        category: "safety",
        brand: "vega",
        price: 1599,
        salePrice: 1399,
        totalStock: 40,
        averageReview: 4.1,
      },
    ];

    setAllProducts(sampleProducts);
  }, []);

  //   const filterCategory = (category) =>{
  //     let val = allProducts.filter(product => product.category === category )
  //     setAllProducts(val)
  // }

  return (
    <div className="mt-[70px] flex">
      <aside className="min-h-screen w-[20%]  p-5">
        <header className="py-4 text-2xl">
          <h1 className="font-extrabold">Filters</h1>
        </header>

        <Divider />

        <div className="py-4">
          <h2 className="font-extrabold">category</h2>

          <ul className="py-2 text-xl select-none">
            <li className="flex gap-2 items-center font-semibold">
              <input type="checkbox" name="men" id="men" />
              <label className="cursor-pointer" htmlFor="men">
                Men
              </label>
            </li>
            <li className="flex gap-2 items-center font-semibold">
              <input type="checkbox" name="women" id="women" />
              <label className="cursor-pointer" htmlFor="women">
                Women
              </label>
            </li>
            <li className="flex gap-2 items-center font-semibold">
              <input type="checkbox" name="kids" id="kids" />
              <label className="cursor-pointer" htmlFor="kids">
                Kids
              </label>
            </li>
            <li className="flex gap-2 items-center font-semibold">
              <input type="checkbox" name="accessories" id="accessories" />
              <label className="cursor-pointer" htmlFor="accessories">
                Accessories
              </label>
            </li>
            <li className="flex gap-2 items-center font-semibold">
              <input type="checkbox" name="footware" id="footware" />
              <label className="cursor-pointer" htmlFor="footware">
                Footware
              </label>
            </li>
          </ul>
        </div>

        <Divider />

        <div className="py-4">
          <h2 className="font-extrabold">brands</h2>

          <ul className="py-2 text-xl select-none">
            <li className="flex gap-2 items-center font-semibold">
              <input type="checkbox" name="nike" id="nike" />
              <label className="cursor-pointer" htmlFor="nike">
                Nike
              </label>
            </li>
            <li className="flex gap-2 items-center font-semibold">
              <input type="checkbox" name="adidas" id="adidas" />
              <label className="cursor-pointer" htmlFor="adidas">
                Adidas
              </label>
            </li>
            <li className="flex gap-2 items-center font-semibold">
              <input type="checkbox" name="puma" id="puma" />
              <label className="cursor-pointer" htmlFor="puma">
                Puma
              </label>
            </li>
            <li className="flex gap-2 items-center font-semibold">
              <input type="checkbox" name="levis" id="levis" />
              <label className="cursor-pointer" htmlFor="levis">
                Levi's
              </label>
            </li>
            <li className="flex gap-2 items-center font-semibold">
              <input type="checkbox" name="handm" id="handm" />
              <label className="cursor-pointer" htmlFor="handm">
                H&M
              </label>
            </li>
            <li className="flex gap-2 items-center font-semibold">
              <input type="checkbox" name="zara" id="zara" />
              <label className="cursor-pointer" htmlFor="zara">
                Zara
              </label>
            </li>
          </ul>
        </div>
      </aside>

      <main className="min-h-screen w-[80%]  p-5">
        <header className="p-4 flex items-center justify-between ">
          <h1 className="text-2xl font-extrabold ">All Products</h1>

          <div className="flex gap-3 items-center">
            <span className="text-gray-500">{allProducts.length} products</span>

            <select
              name="sort"
              id="sort"
              className=" px-3 py-2 rounded outline-0 shadow"
            >
              <option value="" disabled>
                --Sort--
              </option>
              <option value="">High - Low</option>
              <option value="">Low - High</option>
            </select>
          </div>
        </header>

        <article className="grid grid-cols-4">
          {allProducts.map((product, idx) => {
            return (
              <div key={idx} className="p-3">
                <div className="rounded-lg overflow-hidden shadow-md bg-white">
                  <img
                    src="https://rukminim3.flixcart.com/image/850/1000/kvtuxe80/t-shirt/i/k/4/m-dm2254-100nike-nike-original-imag8nbgt2ga6uu8.jpeg?q=90&crop=false"
                    alt=""
                    className=" h-[325px] w-full object-top object-cover"
                  />

                  <div className="p-3">
                    <h1 className="font-bold capitalize text-2xl">
                      {product.title}
                    </h1>

                    <h2 className="flex justify-between uppercase font-semibold text-gray-600 text-sm">
                      <span>{product.category}</span>
                      <span>{product.brand}</span>
                    </h2>

                    <p className="flex justify-between font-bold">
                      <del>Rs.{product.price}</del>
                      <span>Rs.{product.salePrice}</span>
                    </p>

                    <button className="bg-black text-white w-full py-2 rounded mt-4">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </article>
      </main>
    </div>
  );
};

export default Products;
