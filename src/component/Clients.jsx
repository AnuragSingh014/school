import React from 'react';

const Clients = () => {
  const clients = [
    {
      id: 1,
      name: "DreamWorks",
      image: "../../public/clients/disney.svg",
      className: "w-20 md:w-28"
    },
    {
      id: 2,
      name: "Disney Junior",
      image: "../../public/clients/dreamworks.svg",
      className: "w-24 md:w-32"
    },
    {
      id: 3,
      name: "LEGO",
      image: "../../public/clients/fox.png",
      className: "w-20 md:w-28"
    },
    {
      id: 4,
      name: "Nickelodeon",
      image: "../../public/clients/lego.svg",
      className: "w-24 md:w-32"
    },
    {
      id: 5,
      name: "FOX",
      image: "../../public/clients/nicklodean.svg",
      className: "w-16 md:w-24"
    },
    {
      id: 6,
      name: "Warner Brothers",
      image: "../../public/clients/wb.svg",
      className: "w-20 md:w-28"
    }
  ];

  return (
    <div className="w-full py-12 px-4">
      {/* Header with vintage paper effect */}
      <div className="relative flex justify-center mb-16">
        <div className="relative">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-stone-300/40 rounded-full rotate-1"></div>
          <div className="bg-[linear-gradient(90deg,_rgba(234,212,167,1)_3%,_rgba(246,238,219,1)_15%,_rgba(246,238,219,1)_70%,_rgba(234,212,167,1)_94%)] shadow-md px-12 py-3 rounded relative">
            <div class=" p-4 rounded-lg">
              <h2 class="text-3xl md:text-3xl font-semibold uppercase tracking-tighter text-red-700">Trusted Client</h2>
            </div>
            {/* <h1 className="text-4xl font-bold text-red-700">FEATURED WORK</h1> */}
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-stone-300/40 rounded-full -rotate-1"></div>
        </div>
      </div>

      {/* Logos Container */}
      <div className="max-w-6xl mx-auto">
        {/* Mobile Layout */}
        <div className="grid grid-cols-3 gap-8 md:hidden place-items-center">
          {clients.map((client) => (
            <div 
              key={client.id}
              className="flex items-center justify-center"
            >
              <img
                src={client.image}
                alt={`${client.name} logo`}
                className={`${client.className} opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300`}
              />
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex md:justify-between md:items-center md:flex-wrap md:gap-8">
          {clients.map((client) => (
            <div 
              key={client.id}
              className="group transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src={client.image}
                alt={`${client.name} logo`}
                className={`${client.className} opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;