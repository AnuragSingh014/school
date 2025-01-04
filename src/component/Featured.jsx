import React from "react";

const FeaturedWork = () => {
  const projects = [
    {
      id: 1,
      title: "Lightning Project",
      image: "../../public/featured/img1.jpg",
      description: "3D Animation with dynamic lighting effects",
      rotation: "-rotate-2",
    },
    {
      id: 2,
      title: "Kids Adventure",
      image: "../../public/featured/img2.jpeg",
      description: "Animated children's series",
      rotation: "rotate-3",
    },
    {
      id: 3,
      title: "Character Design",
      image: "../../public/featured/img3.png",
      description: "Character lineup showcase",
      rotation: "-rotate-3",
    },
    {
      id: 4,
      title: "Stillwater",
      image: "../../public/featured/img4.jpeg",
      description: "Apple TV+ animated series",
      rotation: "rotate-2",
    },
    {
      id: 5,
      title: "Fantasy Animation",
      image: "../../public/featured/img5.jpg",
      description: "Colorful character designs",
      rotation: "-rotate-2",
    },
    {
      id: 6,
      title: "Robot Adventure",
      image: "../../public/featured/img6.png",
      description: "Action-packed robot series",
      rotation: "rotate-3",
    },
    {
      id: 7,
      title: "Stillwater",
      image: "../../public/featured/img7.jpg",
      description: "Apple TV+ animated series",
      rotation: "rotate-2",
    },
    {
      id: 8,
      title: "Fantasy Animation",
      image: "../../public/featured/img8.png",
      description: "Colorful character designs",
      rotation: "-rotate-2",
    },
    {
      id: 9,
      title: "Robot Adventure",
      image: "../../public/featured/img9.png",
      description: "Action-packed robot series",
      rotation: "rotate-3",
    },
    {
      id: 10,
      title: "Stillwater",
      image: "../../public/featured/img10.png",
      description: "Apple TV+ animated series",
      rotation: "rotate-2",
    },
  ];

  return (
    <div className="min-h-screen p-8">
      {/* Header with vintage paper effect */}
      <div className="relative flex justify-center mb-16">
        <div className="relative">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-stone-300/40 rounded-full"></div>
          <div className="bg-[linear-gradient(90deg,_rgba(234,212,167,1)_3%,_rgba(246,238,219,1)_15%,_rgba(246,238,219,1)_70%,_rgba(234,212,167,1)_94%)] shadow-md px-12 py-3 rounded relative">
            <div class=" p-4 rounded-lg">
              <h2 class="text-3xl md:text-3xl font-semibold uppercase tracking-tighter text-red-700">Featured Work</h2>
            </div>
            {/* <h1 className="text-4xl font-bold text-red-700">FEATURED WORK</h1> */}
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-stone-300/40 rounded-full"></div>
        </div>
      </div>

      {/* Project Grid */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative perspective-1000">
              <div
                className={`
                relative 
                overflow-hidden 
                rounded-lg 
                shadow-lg 
                transition-all 
                duration-300 
                ease-in-out
                ${project.rotation}
                hover:rotate-0
                hover:-translate-y-2
              `}
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-4">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;
