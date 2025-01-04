import React from 'react';

const Clients = () => {
  const clients = [
    {
      id: 1,
      name: "DreamWorks",
      image: "/clients/disney.svg",
      className: "w-20 md:w-28"
    },
    {
      id: 2,
      name: "Disney Junior",
      image: "/clients/dreamworks.svg",
      className: "w-24 md:w-32"
    },
    {
      id: 3,
      name: "LEGO",
      image: "/clients/fox.png",
      className: "w-20 md:w-28"
    },
    {
      id: 4,
      name: "Nickelodeon",
      image: "/clients/lego.svg",
      className: "w-24 md:w-32"
    },
    {
      id: 5,
      name: "FOX",
      image: "/clients/nicklodean.svg",
      className: "w-16 md:w-24"
    },
    {
      id: 6,
      name: "Warner Brothers",
      image: "/clients/wb.svg",
      className: "w-20 md:w-28"
    }
  ];

  return (
    <div className="w-full py-12 px-4">
      {/* Header with vintage paper eff

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