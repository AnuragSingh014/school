import React from 'react';

const Awards = () => {
  const awards = [
    {
      id: 1,
      name: "Peabody Awards",
      status: "Winner",
      image: "../../public/recognition/rec1.svg",
      className: "w-32",
      color: "text-yellow-800"
    },
    {
      id: 2,
      name: "Emmy Awards",
      status: "Winner",
      image: "../../public/recognition/rec2.svg",
      className: "w-32",
      color: "text-black"
    },
    {
      id: 3,
      name: "Annie Awards",
      status: "Nominated For",
      image: "../../public/recognition/rec3.svg",
      className: "w-32",
      color: "text-orange-500"
    },
    {
      id: 4,
      name: "Kidscreen Awards",
      status: "Winner",
      image: "../../public/recognition/rec4.svg",
      className: "w-32",
      color: "text-pink-500"
    }
  ];

  return (
    <div className="w-full py-12 px-4">
      {/* Header with vintage paper effect */}
      <div className="relative flex justify-center items-center mb-16">
        <div className="relative">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-stone-300/40 rounded-full rotate-1"></div>
          <div className="bg-[linear-gradient(90deg,_rgba(234,212,167,1)_3%,_rgba(246,238,219,1)_15%,_rgba(246,238,219,1)_70%,_rgba(234,212,167,1)_94%)] shadow-md px-12 py-3 rounded relative">
            <div class=" p-4 rounded-lg">
              <h2 class="text-3xl md:text-3xl font-semibold uppercase tracking-tighter text-red-700">Our Recognition</h2>
            </div>
            {/* <h1 className="text-4xl font-bold text-red-700">FEATURED WORK</h1> */}
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-stone-300/40 rounded-full -rotate-1"></div>
        </div>
      </div>

      {/* Awards Grid */}
      <div className="max-w-6xl mx-auto">
  <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
    {awards.map((award) => (
      <div
        key={award.id}
        className="relative group flex flex-col items-center justify-center text-center transition-transform duration-300 hover:-translate-y-1"
      >
        {/* Laurel Wreath */}
        <div className="absolute inset-0 -m-10">
          <svg viewBox="0 0 300 300" className="w-full h-full opacity-30">
            <path
              d="M150,30 C90,30 30,75 30,150 C30,225 90,270 150,270 C210,270 270,225 270,150 C270,75 210,30 150,30"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-gray-400"
            />
          </svg>
        </div>

        {/* Award Content */}
        <div className="relative z-10">
          <img
            src={award.image}
            alt={`${award.name}`}
            className={`${award.className} w-48 mx-auto mb-4`}
          />
          <h3 className={`text-2xl font-semibold ${award.color}`}>{award.name}</h3>
          <p className="text-lg text-gray-600">{award.status}</p>
        </div>
      </div>
    ))}
  </div>
</div>


    </div>
  );
};

export default Awards;