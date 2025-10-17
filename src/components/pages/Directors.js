import React, { useState } from "react";

const directorData = [
  {
    name: "Deepak TR",
    title: "Agriculturist & Horticulturist",
    desc: "Founder of Urban Krushika, driving sustainable agriculture initiatives. Passionate about sustainable farming, Deepak has over a decade of experience in modern horticulture practices.",
    // avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    bg: "bg-green-100",
  },
  {
    name: "Prasana",
    title: "Civil Engineer",
    desc: "Owner of SneahBuildCare — expert in construction and design. He leads residential and commercial project execution with a focus on structural efficiency.",
    // avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    bg: "bg-blue-100",
  },
  {
    name: "Ramesh",
    title: "Advocate & Strategist",
    desc: "Legal expert and strategic head of business operations. Ramesh ensures regulatory compliance and provides long-term vision to the company.",
    // avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    bg: "bg-yellow-100",
  },
  {
    name: "Vinuth S",
    title: "Software Engineer",
    desc: "Leading our tech and digital solutions development. Vinuth brings innovation, scalability, and modern software infrastructure to our business.",
    // avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    bg: "bg-purple-100",
  },
];

const Directors = () => {
  const [selectedDirector, setSelectedDirector] = useState(null);

  const closeModal = () => {
    setSelectedDirector(null);
  };

  return (
    <div id="directors" className="w-full min-h-screen bg-gradient-to-b from-white to-blue-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-12">
          Meet Our <span className="text-amber-700 underline underline-offset-4">Directors</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {directorData.map((director, index) => (
            <div
              key={index}
              onClick={() => setSelectedDirector(director)}
              className={`cursor-pointer rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 transform transition duration-300 ${director.bg}`}
            >
              <img
                src={director.avatar}
                alt={director.name}
                className="w-24 h-24 mx-auto mb-4 rounded-full object-cover shadow-lg"
              />
              <h2 className="text-lg font-bold text-gray-900 mb-1">{director.name}</h2>
              <h3 className="text-sm text-gray-600 mb-3 italic">{director.title}</h3>
              <p className="text-sm text-gray-700 line-clamp-3">{director.desc}</p>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedDirector && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-xl p-6 w-11/12 max-w-md shadow-xl relative"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <button
                className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl"
                onClick={closeModal}
              >
                &times;
              </button>
              <img
                src={selectedDirector.avatar}
                alt={selectedDirector.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4 shadow"
              />
              <h2 className="text-xl font-bold text-gray-800">{selectedDirector.name}</h2>
              <h3 className="text-sm text-gray-500 italic mb-4">{selectedDirector.title}</h3>
              <p className="text-gray-700 text-sm">{selectedDirector.desc}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Directors;
