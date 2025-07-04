import React from "react";
import { IoShirtOutline } from "react-icons/io5";
import { PiPantsLight } from "react-icons/pi";
import { CgBoy } from "react-icons/cg";
import { FiWatch } from "react-icons/fi";
import { GiRunningShoe } from "react-icons/gi";
import { SiPuma } from "react-icons/si";
import { SiAdidas } from "react-icons/si";
import { SiNike } from "react-icons/si";
import { SiZara } from "react-icons/si";
import { SiHandm } from "react-icons/si";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Home = () => {
  const categories = [
    {
      icon: <IoShirtOutline />,
      title: "Men",
    },
    {
      icon: <PiPantsLight />,
      title: "Women",
    },
    {
      icon: <CgBoy />,
      title: "Kids",
    },
    {
      icon: <FiWatch />,
      title: "Accessories",
    },
    {
      icon: <GiRunningShoe />,
      title: "Footwear",
    },
  ];

  const brands = [
    {
      icon: <SiPuma />,
      title: "Puma",
    },
    {
      icon: <SiAdidas />,
      title: "Adidas",
    },
    {
      icon: <SiNike />,
      title: "Nike",
    },
    {
      icon: <SiHandm />,
      title: "H&M",
    },
    {
      icon: <SiZara />,
      title: "Zara",
    },
  ];

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
      description: "strong and stylish full face helmet for two-wheeler riders",
      category: "safety",
      brand: "vega",
      price: 1599,
      salePrice: 1399,
      totalStock: 40,
      averageReview: 4.1,
    },
  ];

  const items = [
    <div className="item h-[70vh] relative" data-value="1">
      <img
        src="/assets/image1.png"
        alt="landing image"
        className="h-full w-full object-center object-cover"
      />

      <div className="absolute top-30 left-30">
        <h1 className="text-5xl font-light mb-2">
          We Pick Every Item with Care
        </h1>
        <h1 className="text-4xl font-bold mb-10">You Must Try</h1>
        <button className="bg-black text-white p-3">View Products</button>
      </div>
    </div>,



    <div className="item h-[70vh] relative" data-value="2">
      <img
        src="/assets/image1.png"
        alt="landing image"
        className="h-full w-full object-center object-cover"
      />

      <div className="absolute top-30 left-30">
        <h1 className="text-5xl font-light mb-2">
          We Pick Every Item with Care
        </h1>
        <h1 className="text-4xl font-bold mb-10">You Must Try</h1>
        <button className="bg-black text-white p-3">View Products</button>
      </div>
    </div>,
    <div className="item h-[70vh] relative" data-value="3">
      <img
        src="/assets/image1.png"
        alt="landing image"
        className="h-full w-full object-center object-cover"
      />

      <div className="absolute top-30 left-30">
        <h1 className="text-5xl font-light mb-2">
          We Pick Every Item with Care
        </h1>
        <h1 className="text-4xl font-bold mb-10">You Must Try</h1>
        <button className="bg-black text-white p-3">View Products</button>
      </div>
    </div>,
    <div className="item h-[70vh] relative" data-value="4">
      <img
        src="/assets/image1.png"
        alt="landing image"
        className="h-full w-full object-center object-cover"
      />

      <div className="absolute top-30 left-30">
        <h1 className="text-5xl font-light mb-2">
          We Pick Every Item with Care
        </h1>
        <h1 className="text-4xl font-bold mb-10">You Must Try</h1>
        <button className="bg-black text-white p-3">View Products</button>
      </div>
    </div>,
    <div className="item h-[70vh] relative" data-value="5">
      <img
        src="/assets/image1.png"
        alt="landing image"
        className="h-full w-full object-center object-cover"
      />

      <div className="absolute top-30 left-30">
        <h1 className="text-5xl font-light mb-2">
          We Pick Every Item with Care
        </h1>
        <h1 className="text-4xl font-bold mb-10">You Must Try</h1>
        <button className="bg-black text-white p-3">View Products</button>
      </div>
    </div>,
  ];

  return (
    <section className="mt-[70px]  bg-gray-50">
      <AliceCarousel
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={2000}
        animationDuration={1000}
        animationType="slide"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
      />

      <header className="py-20">
        <h1 className="text-4xl font-extrabold text-center">
          Shop by Category
        </h1>
      </header>

      <article className="flex items-center justify-evenly">
        {categories.map((category, idx) => {
          return (
            <div key={idx} className="px-20 py-10 rounded bg-white shadow-lg">
              <h1 className="text-6xl flex justify-center">{category.icon}</h1>
              <h3 className="text-center mt-2 font-semibold">
                {category.title}
              </h3>
            </div>
          );
        })}
      </article>

      <header className="py-20">
        <h1 className="text-4xl font-extrabold text-center">Shop by Brands</h1>
      </header>

      <article className="flex items-center justify-evenly">
        {brands.map((brand, idx) => {
          return (
            <div key={idx} className="px-20 py-10 rounded bg-white shadow-lg">
              <h1 className="text-6xl flex justify-center">{brand.icon}</h1>
              <h3 className="text-center mt-2 font-semibold">{brand.title}</h3>
            </div>
          );
        })}
      </article>

      <header className="py-20">
        <h1 className="text-4xl font-extrabold text-center">
          Featured Products
        </h1>
      </header>

      <article className="grid grid-cols-4">
        {sampleProducts.map((product, idx) => {
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
    </section>
  );
};

export default Home;
