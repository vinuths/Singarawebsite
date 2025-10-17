import React from "react";
import Imagee from "../../assets/1.png";
import Imageee from "../../assets/2.png";
import Imageeee from "../../assets/3.png";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";

const Features = () => {
  const properties = [
    {
      img: Imagee,
      title: "123 Main St",
      beds: 3,
      baths: 2,
      size: 1500,
      price: "$500,000",
    },
    {
      img: Imageee,
      title: "456 Oak St",
      beds: 4,
      baths: 3,
      size: 2000,
      price: "$750,000",
    },
    {
      img: Imageeee,
      title: "789 Maple Ave",
      beds: 2,
      baths: 1,
      size: 1000,
      price: "$300,000",
    },
  ];

  return (
    <div
      id="feature"
      className="w-full min-h-screen p-4 flex items-center bg-gradient-to-b from-white to-gray-100"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6 text-center">
          Feature{" "}
          <span className="text-amber-700 underline decoration-4 underline-offset-8">
            Properties
          </span>
        </h2>
        <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          Here are some of our featured properties:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {properties.map(({ img, title, beds, baths, size, price }, i) => (
            <div
              key={i}
              className="relative bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Image with gradient overlay */}
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {title}
                </h3>
                {/* Property details with icons */}
                <div className="flex items-center space-x-6 text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <FaBed className="text-amber-700" />
                    <span>{beds} bd</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaBath className="text-amber-700" />
                    <span>{baths} ba</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaRulerCombined className="text-amber-700" />
                    <span>{size.toLocaleString()} sqft</span>
                  </div>
                </div>
                <p className="text-3xl font-bold text-amber-700">{price}</p>
                <button
                  className="mt-6 w-full px-5 py-3 bg-amber-700 text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 transition"
                  aria-label={`View details of ${title}`}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
